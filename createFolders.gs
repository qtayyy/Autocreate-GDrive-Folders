function createFolders()
{
	// Add your Folder ID here
	var	folderID = null;
	var rootFolder;

	if (folderID)
	{
		rootFolder = DriveApp.getFolderById(folderID);
	}
	else
	{
		Logger.log("No root folder specified. Using Google Drive root folder.");
		rootFolder = DriveApp.getRootFolder();
	}

	// Add your Google Sheet URL here
	var	spreadsheetUrl = ""
	if (!spreadsheetUrl)
	{
		Logger.log("No spreadsheet URL provided! Terminating program.");
		return;
	}

	var	ss; 
	try
	{
		ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
	}
	catch (e)
	{
		Logger.log("Error opening spreadsheet: " + e.message);
		return;
	}

	// Specify your sheet name here
	var sheet = ss.getSheetByName("Sheet2");
	if (!sheet)
	{
		Logger.log("Sheet 'Sheet1' not found! Terminating program");
		return;
	}

	var data = sheet.getDataRange().getValues();
	if (data.length < 2)
	{
		Logger.log("No data found in the provided spreadsheet! Terminating program");
		return;
	}

	var folderMap = {};

	for (var i = 1; i < data.length; i++) // Skip header row
	{
		var	parentFolder = rootFolder;
		var	path = "";
	
		for (var j = 0; j < data[i].length; j++) // Loop through columns
		{
			var	folderName = data[i][j];

			if (folderName)
			{
				path += "/" + folderName;

				if (!folderMap[path])
				{
					folderMap[path] = parentFolder.createFolder(folderName); // return Folder obj
				}

				parentFolder = folderMap[path];
			}
		}
	}
}
