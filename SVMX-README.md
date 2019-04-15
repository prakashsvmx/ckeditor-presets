#Why a Custom CKEditor Preset/Build ?

Building Servicemax Preset:

Before Building: Ensure the release notes of CKEditor is read fullly and understood.

Note: If the project location is different, adjust the paths in svmx-build.sh

1. Open a Terminal: 

2. First update the CKEditor Sub Modules:
 - git submodule update --init

3. Adjust svmx-build-config.js
- If any plugin to be added or removed adjust accordingly. in svmx-build-config.js

4. Copy the required plugins to plugins directory.
- This can be done via the CKBuilder online. just by uploading svmx-build-config.js
- Navigate to: https://ckeditor.com/cke4/builder
    - Click on Upload build-config.js
    - Adjust the plugin selection if required.
- Adjust the skin if required.
- Download the zip file Choose: Big N’Slow Option.
- Extract the zip
- Copy plugins from extracted location to plugins of this project.

5. Adjust svmx-ckeditor-config 
- If any plugin to be disabled at the top level (e.g Org wide). make the configuration here.

>**Note: custom skin should be copied manually to the final output folder.**

#. Run the build.
- ./svmx-build.sh svmx

- The build is optimized.with Plugins, Skin (Theme). and could be deployed.

# To build as a static resource:
1. Use finder to Navigate to build/<VERSION:4.11.4>/svmx/ckeditor
2. Right click and choose compress 
3. Upload the zip to salesforce as a static resource. (static resource name is svmx_ckeditor4)


>**Do not commit sub module changes (ckeditor-presets/ckeditor). because this is built at run time.**