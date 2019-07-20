# Web Accessibility Workshop: The Building Blocks

## Purpose
This repo has been developed as part of an in-person web accessibility workshop. This is the hands-on portion, developed to help teach the building blocks of web accessibility through the completion of mini-exercises. Each exercise exposes a new method for improving the usability of the demo site provided in this repo.

The demo site is not accessible in many ways. Through the completion of mini-exercises, workshop participants improve the accessibility of the demo site and work to debug issues and find solutions for common accessibility problems. The presentation slides provide more context, detailing the mini-exercises to be completed with code samples as guidance and additional resources for self-exploration.

## Presentation Slides
Presentation slides are available at [https://docs.google.com/presentation/d/1WToCHudhUgJsmPq0N11Nm0wDAYmAHkce50n812dD810](https://docs.google.com/presentation/d/1WToCHudhUgJsmPq0N11Nm0wDAYmAHkce50n812dD810).

## Dependencies
All required files are included in the repo. This project utilizes jQuery, HTML5, and CSS.

## Suggested Tooling/System Requirements

### MAMP/LAMP (our server):

- MAMP (Mac/Windows): [mamp.info/en/downloads](https://www.mamp.info/en/downloads/)
- LAMP (Linux): [ampps.com/lamp](http://ampps.com/lamp)


### VoiceOver/NVDA/Orca (our screen reader):
- VoiceOver (Mac): preinstalled, no download required
- NVDA (Windows): [nvaccess.org/download](https://www.nvaccess.org/download/)
- ORCA (Linux): [pkgs.org/download/orca](https://pkgs.org/download/orca)

### A text editor of your choosing:
- [VSCode](https://code.visualstudio.com/Download), [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/3)

## Installation Steps/Guides

### MAMP (Mac) Installation Steps

#### Step 1

Go to MAMP download page at [mamp.info/en/downloads](https://www.mamp.info/en/downloads/). Select the "MAMP & MAMP PRO" version you want to download (Mac version circled in red).

![MAMP download page highlighting the Mac download button](/assets/mamp_sn/step1.png)

#### Step 2

Once the download is complete, double-click the installer `.pkg` file to start the installation process.

![MAMP install screen highlighting continue button](/assets/mamp_sn/step2.png)

#### Step 3 (optional)

If you haven't already, download or clone this project repo (option to download zip file circled in red).

![Browser highlighting project github URL and download zip button](/assets/mamp_sn/step3.png)

#### Step 4 (optional)

If you downloaded the project as a zip file, unzip it.

![Screenshot pointing to project zip file](/assets/mamp_sn/step4.png)

#### Step 5

Open MAMP application. On Mac, the application will be located inside a MAMP directory within the Applications directory.

![Screenshot pointing to MAMP installation](/assets/mamp_sn/step5.png)

#### Step 6

Once MAMP is open, select the MAMP tab from the menu options and then select Preferences. This will open the Preferences window.

From the Preferences window, select the Web Server tab. From there, click on the "Select" button and locate the unzipped project folder. Select the project folder, click the "Select" button and then confirm your selection using the "Ok" button.

![](/assets/mamp_sn/step6.png)

#### Step 7

Once you're back on the main MAMP screen, select the "Start Servers" button. This will launch a new browser window pointing to `localhost:8888/`. If the browser window doesn't automatically open, use any browser and enter the URL `localhost:8888/` to view the project.

![](/assets/mamp_sn/step7.png)

### MAMP (Windows) Installation Steps

Step-by-Step instructions available at [https://documentation.mamp.info/en/MAMP-Windows/Installation/](https://documentation.mamp.info/en/MAMP-Windows/Installation/).

### LAMP Installation Steps

We're using AAMPS on Linux for this setup. An installation guide is available at [http://www.ampps.com/LAMP](http://www.ampps.com/LAMP). There's also a wiki available at [https://ampps.com/wiki/Installing_AMPPS_on_Linux](https://ampps.com/wiki/Installing_AMPPS_on_Linux).


### VoiceOver

VoiceOver comes preinstalled on Mac. To activate VoiceOver:

- Open System Preferences,
- Select Accessibility,
- Select VoiceOver from the menu on the left (under Vision),
- Select "Enable VoiceOver"

Check out the WebAIM "Using VoiceOver to Evaluate Web Accessibility" guide available at [https://webaim.org/articles/voiceover](https://webaim.org/articles/voiceover) for tips on using VoiceOver.

### NVDA

A "Getting and Setting up NVDA guide" is available at [https://www.nvaccess.org/files/nvda/documentation/userGuide.html?#GettingAndSettingUpNVDA](https://www.nvaccess.org/files/nvda/documentation/userGuide.html?#GettingAndSettingUpNVDA).

Check out the WebAIM "Using NVDA to Evaluate Web Accessibility" guide available at [https://webaim.org/articles/nvda/](https://webaim.org/articles/nvda/).

### Orca

Orca provides a "Getting Started" guide at [https://help.gnome.org/users/orca/stable/index.html.en](https://help.gnome.org/users/orca/stable/index.html.en).