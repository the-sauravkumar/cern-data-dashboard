import requests

CERN_API_URL = "https://opendata.cern.ch/api/records"

def fetch_cern_data(query):
    params = {"q": query, "format": "json"}
    response = requests.get(CERN_API_URL, params=params)
    return response.json() if response.status_code == 200 else {"error": "Failed to fetch data"}
