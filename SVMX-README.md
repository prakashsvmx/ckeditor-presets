#Why a Custom Preset/Build ?



Building Servicemax Preset:

Before Building: Ensure the release notes of CKEditor is read fullly and understood.

Note: If the project location is different, adjust the paths in svmx-build.sh

Open a Terminal: 
#. First update the CKEditor Sub Modules:
git submodule update --init

#.Adjust svmx-build-config.js
If any plugin to be added or removed adjust accordingly.

#. Copy the required plugins to plugins directory.
This can be done via the CKBuilder online. just by uploading svmx-build-config.js
Navigate to: https://ckeditor.com/cke4/builder
Click on Upload build-config.js
-Adjust the plugin selection if required.
-Adjust the skin if required.
Download the zip file Choose: Big N’Slow Option.
Extract the zip
Copy plugins from extracted location to plugins of this project.

#. Adjust svmx-ckeditor-config 
If any plugin to be disabled at the top level (e.g Org wide). make the configuration here.

# Note custom skin should be copied manually for now to static resource.
-TBD

#. Run the build.
./svmx-build.sh svmx

The build is optimized.
