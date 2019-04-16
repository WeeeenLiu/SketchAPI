interface NSPasteboardUninitialized<InitializedType = NSPasteboard> extends NSObjectUninitialized<NSPasteboard> {}
interface NSPasteboard extends NSObject {
  releaseGlobally(): void;
  prepareForNewContentsWithOptions(options: NSPasteboardContentsOptions): NSInteger;
  clearContents(): NSInteger;
  writeObjects(objects: NSArray<any> | any[]): boolean;
  readObjectsForClasses_options(classArray: NSArray<any> | any[], options: NSDictionary<any, any> | {[key: string]: any} | null): NSArray<any>;
  indexOfPasteboardItem(pasteboardItem: NSPasteboardItem): NSUInteger;
  canReadItemWithDataConformingToTypes(types: NSArray<any> | any[]): boolean;
  canReadObjectForClasses_options(classArray: NSArray<any> | any[], options: NSDictionary<any, any> | {[key: string]: any} | null): boolean;
  declareTypes_owner(newTypes: NSArray<any> | any[], newOwner: any | null): NSInteger;
  addTypes_owner(newTypes: NSArray<any> | any[], newOwner: any | null): NSInteger;
  availableTypeFromArray(types: NSArray<any> | any[]): NSPasteboardType;
  setData_forType(data: NSData | null, dataType: NSPasteboardType): boolean;
  setPropertyList_forType(plist: any, dataType: NSPasteboardType): boolean;
  setString_forType(string: NSString | string, dataType: NSPasteboardType): boolean;
  dataForType(dataType: NSPasteboardType): NSData;
  propertyListForType(dataType: NSPasteboardType): any;
  stringForType(dataType: NSPasteboardType): NSString;
  writeFileContents(filename: NSString | string): boolean;
  readFileContentsType_toFile(type: NSPasteboardType | null, filename: NSString | string): NSString;
  writeFileWrapper(wrapper: NSFileWrapper): boolean;
  readFileWrapper(): NSFileWrapper;

  name(): NSPasteboardName;
  changeCount(): NSInteger;
  pasteboardItems(): NSArray<any>;
  types(): NSArray<any>;
}
declare const NSPasteboard: {
  alloc(): NSPasteboardUninitialized;
  class(): NSPasteboard;  pasteboardWithName(name: NSPasteboardName): NSPasteboard;
  pasteboardWithUniqueName(): NSPasteboard;
  typesFilterableTo(type: NSPasteboardType): NSArray<any>;
  pasteboardByFilteringFile(filename: NSString | string): NSPasteboard;
  pasteboardByFilteringData_ofType(data: NSData, type: NSPasteboardType): NSPasteboard;
  pasteboardByFilteringTypesInPasteboard(pboard: NSPasteboard): NSPasteboard;

  generalPasteboard(): NSPasteboard;

}

