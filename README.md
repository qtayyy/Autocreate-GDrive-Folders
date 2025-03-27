# Autocreate GDrive Folders

This script is designed to help you **mass-create multiple folders** on Google Drive based on a directory structure specified in a Google Spreadsheet.

## Steps to Use

Follow the steps below to set up and use the script:

1. **Create Your Directory Structure**  
   - Open a new Google Spreadsheet and define your desired directory structure. Each row can represent a folder or subfolder in your hierarchy.

2. **Launch Google Apps Script**  
   - Click on `Extensions` in the Google Sheets menu, then select `Apps Script` to open the script editor.

3. **Paste the Code**  
   - Copy the code provided here and paste it into the Apps Script editor panel.

4. **Customize the Script**  
   - Modify the following fields in the script:
     - `folderID`: The ID of the existing folder you want to create new subfolders in (if applicable).
     - `spreadsheetUrl`: The URL of the Google Spreadsheet you’re using.
     - `sheet`: The name of the sheet where your directory structure is defined.

5. **Save and Run**  
   - After customizing the script, click on `Save` and then click the `Run` button to execute the script.

## Notes
- The script will automatically create folders based on the structure you've defined in your Google Spreadsheet.
- Ensure that the folder ID, spreadsheet URL, and sheet name are correctly specified to avoid errors during execution.

---

By following these steps, you can quickly and efficiently organize your Google Drive by creating a folder hierarchy directly from a spreadsheet.
