interface NSWorkspaceUninitialized<InitializedType = NSWorkspace> extends NSObjectUninitialized<NSWorkspace> {}
interface NSWorkspace extends NSObject {
  openFile(fullPath: NSString | string): boolean;
  openFile_withApplication(fullPath: NSString | string, appName: NSString | string | null): boolean;
  openFile_withApplication_andDeactivate(fullPath: NSString | string, appName: NSString | string | null, flag: boolean): boolean;
  openURL(url: NSURL): boolean;
  launchApplication(appName: NSString | string): boolean;
  launchApplicationAtURL_options_configuration_error(url: NSURL, options: NSWorkspaceLaunchOptions, configuration: NSDictionary<any, any> | {[key: string]: any}, error: NSError): NSRunningApplication;
  openURL_options_configuration_error(url: NSURL, options: NSWorkspaceLaunchOptions, configuration: NSDictionary<any, any> | {[key: string]: any}, error: NSError): NSRunningApplication;
  openURLs_withApplicationAtURL_options_configuration_error(urls: NSArray<any> | any[], applicationURL: NSURL, options: NSWorkspaceLaunchOptions, configuration: NSDictionary<any, any> | {[key: string]: any}, error: NSError): NSRunningApplication;
  launchApplication_showIcon_autolaunch(appName: NSString | string, showIcon: boolean, autolaunch: boolean): boolean;
  fullPathForApplication(appName: NSString | string): NSString;
  selectFile_inFileViewerRootedAtPath(fullPath: NSString | string | null, rootFullPath: NSString | string): boolean;
  activateFileViewerSelectingURLs(fileURLs: NSArray<any> | any[]): void;
  showSearchResultsForQueryString(queryString: NSString | string): boolean;
  noteFileSystemChanged(path: NSString | string): void;
  getInfoForFile_application_type(fullPath: NSString | string, appName: NSString | string, type: NSString | string): boolean;
  isFilePackageAtPath(fullPath: NSString | string): boolean;
  iconForFile(fullPath: NSString | string): NSImage;
  iconForFiles(fullPaths: NSArray<any> | any[]): NSImage;
  iconForFileType(fileType: NSString | string): NSImage;
  setIcon_forFile_options(image: NSImage | null, fullPath: NSString | string, options: NSWorkspaceIconCreationOptions): boolean;
  recycleURLs_completionHandler(URLs: NSArray<any> | any[], handler: Block): void;
  duplicateURLs_completionHandler(URLs: NSArray<any> | any[], handler: Block): void;
  getFileSystemInfoForPath_isRemovable_isWritable_isUnmountable_description_type(fullPath: NSString | string, removableFlag: boolean | null, writableFlag: boolean | null, unmountableFlag: boolean | null, description: NSString | string, fileSystemType: NSString | string): boolean;
  unmountAndEjectDeviceAtPath(path: NSString | string): boolean;
  unmountAndEjectDeviceAtURL_error(url: NSURL, error: NSError): boolean;
  extendPowerOffBy(requested: NSInteger): NSInteger;
  hideOtherApplications(): void;
  URLForApplicationWithBundleIdentifier(bundleIdentifier: NSString | string): NSURL;
  URLForApplicationToOpenURL(url: NSURL): NSURL;
  absolutePathForAppBundleWithIdentifier(bundleIdentifier: NSString | string): NSString;
  launchAppWithBundleIdentifier_options_additionalEventParamDescriptor_launchIdentifier(bundleIdentifier: NSString | string, options: NSWorkspaceLaunchOptions, descriptor: NSAppleEventDescriptor | null, identifier: NSNumber | number): boolean;
  openURLs_withAppBundleIdentifier_options_additionalEventParamDescriptor_launchIdentifiers(urls: NSArray<any> | any[], bundleIdentifier: NSString | string | null, options: NSWorkspaceLaunchOptions, descriptor: NSAppleEventDescriptor | null, identifiers: NSArray<any> | any[]): boolean;
  typeOfFile_error(absoluteFilePath: NSString | string, outError: NSError): NSString;
  localizedDescriptionForType(typeName: NSString | string): NSString;
  preferredFilenameExtensionForType(typeName: NSString | string): NSString;
  filenameExtension_isValidForType(filenameExtension: NSString | string, typeName: NSString | string): boolean;
  type_conformsToType(firstTypeName: NSString | string, secondTypeName: NSString | string): boolean;
  setDesktopImageURL_forScreen_options_error(url: NSURL, screen: NSScreen, options: NSDictionary<any, any> | {[key: string]: any}, error: NSError): boolean;
  desktopImageURLForScreen(screen: NSScreen): NSURL;
  desktopImageOptionsForScreen(screen: NSScreen): NSDictionary<any, any>;
  requestAuthorizationOfType_completionHandler(type: NSWorkspaceAuthorizationType, completionHandler: Block): void;
  openTempFile(fullPath: NSString | string): boolean;
  findApplications(): void;
  noteUserDefaultsChanged(): void;
  slideImage_from_to(image: NSImage, fromPoint: NSPoint, toPoint: NSPoint): void;
  checkForRemovableMedia(): void;
  noteFileSystemChanged(): void;
  fileSystemChanged(): boolean;
  userDefaultsChanged(): boolean;
  mountNewRemovableMedia(): NSArray<any>;
  activeApplication(): NSDictionary<any, any>;
  mountedLocalVolumePaths(): NSArray<any>;
  mountedRemovableMedia(): NSArray<any>;
  launchedApplications(): NSArray<any>;
  openFile_fromImage_at_inView(fullPath: NSString | string, image: NSImage | null, point: NSPoint, view: NSView | null): boolean;
  performFileOperation_source_destination_files_tag(operation: NSWorkspaceFileOperationName, source: NSString | string, destination: NSString | string, files: NSArray<any> | any[], tag: NSInteger | null): boolean;
  applicationSupportDirectory(): NSString;
  setApplicationSupportDirectory(path: NSString | string): void;
  applicationSupportDirectoryWithSubDirectory_createIfNeeded(directoryName: NSString | string, create: boolean): NSString;
  sharedApplicationSupportDirectory(): NSString;

  accessibilityDisplayShouldIncreaseContrast(): boolean;
  accessibilityDisplayShouldDifferentiateWithoutColor(): boolean;
  accessibilityDisplayShouldReduceTransparency(): boolean;
  accessibilityDisplayShouldReduceMotion(): boolean;
  accessibilityDisplayShouldInvertColors(): boolean;
  voiceOverEnabled(): boolean;
  switchControlEnabled(): boolean;
  runningApplications(): NSArray<any>;
  notificationCenter(): NSNotificationCenter;
  fileLabels(): NSArray<any>;
  fileLabelColors(): NSArray<any>;
  frontmostApplication(): NSRunningApplication;
  menuBarOwningApplication(): NSRunningApplication;
}
declare const NSWorkspace: {
  alloc(): NSWorkspaceUninitialized;
  class(): NSWorkspace;
  sharedWorkspace(): NSWorkspace;

}

