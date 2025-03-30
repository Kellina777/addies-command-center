import os
import random
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

# Load API key and credentials from environment variables
api_key = os.getenv("GOOGLE_API_KEY")
json_key_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

def authenticate_google():
    try:
        credentials = Credentials.from_service_account_file(json_key_path)
        service = build('sheets', 'v4', credentials=credentials)
        print(f"✅ Credentials loaded from: {json_key_path}")
        return service
    except Exception as e:
        print(f"❌ Error connecting to Google Sheets: {e}")
        return None

def create_google_sheet():
    try:
        service = authenticate_google()
        spreadsheet = {
            'properties': {
                'title': "Addie Multi-Mod Data"
            }
        }
        sheet = service.spreadsheets().create(body=spreadsheet, fields='spreadsheetId').execute()
        print(f"✅ Spreadsheet created successfully! ID: {sheet.get('spreadsheetId')}")
    except Exception as e:
        print(f"❌ Error creating spreadsheet: {e}")

def outreach_optimizer():
    print("Launching Outreach Optimizer...")
    print("1. Manus Script for Plug-and-Play")
    print("2. Super Secret Password Paragraph for Waitlist Access")
    user_choice = input("Choose an option (1 or 2): ")
    if user_choice == "1":
        return "Manus Script for Plug-and-Play: Ready to go!"
    elif user_choice == "2":
        return "Super Secret Password Paragraph: [Generated Prompt]"
    else:
        return "Invalid selection. Please choose 1 or 2."

# Run the script to create a Google Sheet
create_google_sheet()
print(outreach_optimizer())
