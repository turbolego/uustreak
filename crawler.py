import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
from urllib.parse import urlparse

# Function to extract and format links
def extract_links(url):
    # Send a GET request to the URL
    response = requests.get(url)
    response.raise_for_status()  # Raise an error for bad status codes

    # Parse the webpage content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Initialize a list to hold the link dictionaries
    links_list = []

    # Iterate through all anchor tags
    for link in soup.find_all('a', href=True):
        href = link['href'].strip()
        name = link.get_text(strip=True)

        # Skip empty names or hrefs
        if not name or not href:
            continue

        # Resolve relative URLs to absolute URLs
        absolute_url = requests.compat.urljoin(url, href)

        # Extract the path from the base URL and replace '/' with '-'
        parsed_url = urlparse(absolute_url)
        path = parsed_url.path.strip('/')
        sanitized_name = path.replace('/', '-')

        # Create a dictionary for the link
        link_dict = {
            "name": sanitized_name,
            "Samfunnsområde": "Statleg forvaltning og tenesteyting",
            "baseURL": absolute_url
        }

        # Add the dictionary to the list
        links_list.append(link_dict)

    return links_list

# URL of the webpage to scrape
url = 'https://www.ung.no/'

# Extract links
links = extract_links(url)

# Generate a timestamped filename
timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
filename = f'crawl_{timestamp}.json'

# Save the JSON data to a file
with open(filename, 'w', encoding='utf-8') as file:
    json.dump(links, file, ensure_ascii=False, indent=2)

print(f'JSON data has been saved to {filename}')
