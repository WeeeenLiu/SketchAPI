interface NSXMLNodeUninitialized<InitializedType = NSXMLNode> extends NSObjectUninitialized<NSXMLNode> {
  init(): InitializedType;
  initWithKind(kind: NSXMLNodeKind): InitializedType;
  initWithKind_options(kind: NSXMLNodeKind, options: NSXMLNodeOptions): InitializedType;
}
interface NSXMLNode extends NSObject, INSCopying {
  setStringValue_resolvingEntities(string: NSString | string, resolve: boolean): void;
  childAtIndex(index: NSUInteger): NSXMLNode;
  detach(): void;
  XMLStringWithOptions(options: NSXMLNodeOptions): NSString;
  canonicalXMLStringPreservingComments(comments: boolean): NSString;
  nodesForXPath_error(xpath: NSString | string, error: NSError): NSArray<any>;
  objectsForXQuery_constants_error(xquery: NSString | string, constants: NSDictionary<any, any> | {[key: string]: any} | null, error: NSError): NSArray<any>;
  objectsForXQuery_error(xquery: NSString | string, error: NSError): NSArray<any>;
  doubleValueFromAttributeWithName(name: NSString | string): number;
  doubleValue(): number;
  doubleValueWithScale(scale: CGFloat): number;
  numberValue(): NSNumber;
  numberValueWithScale(scale: CGFloat): NSNumber;
  numberValues(): NSArray<any>;
  numberValuesWithScale(scale: CGFloat): NSArray<any>;
  integerValue(): NSInteger;
  rectValue(): NSRect;
  simplifyAttributesIgnoringElements_attributes(elementsToIgnore: NSArray<any> | any[], attributesToIgnore: NSArray<any> | any[]): NSArray<any>;
  cssClassNamesWithBase(base: NSString | string): NSArray<any>;

  kind(): NSXMLNodeKind;
  name(): NSString;
  setName(name: NSString | string): void;
  objectValue(): any;
  setObjectValue(objectValue: any): void;
  stringValue(): NSString;
  setStringValue(stringValue: NSString | string): void;
  index(): NSUInteger;
  level(): NSUInteger;
  rootDocument(): NSXMLDocument;
  parent(): NSXMLNode;
  childCount(): NSUInteger;
  children(): NSArray<any>;
  previousSibling(): NSXMLNode;
  nextSibling(): NSXMLNode;
  previousNode(): NSXMLNode;
  nextNode(): NSXMLNode;
  XPath(): NSString;
  localName(): NSString;
  prefix(): NSString;
  URI(): NSString;
  setURI(URI: NSString | string): void;
  description(): NSString;
  XMLString(): NSString;
}
declare const NSXMLNode: {
  alloc(): NSXMLNodeUninitialized;
  class(): NSXMLNode;  document(): any;
  documentWithRootElement(element: NSXMLElement): any;
  elementWithName(name: NSString | string): any;
  elementWithName_URI(name: NSString | string, URI: NSString | string): any;
  elementWithName_stringValue(name: NSString | string, string: NSString | string): any;
  elementWithName_children_attributes(name: NSString | string, children: NSArray<any> | any[] | null, attributes: NSArray<any> | any[] | null): any;
  attributeWithName_stringValue(name: NSString | string, stringValue: NSString | string): any;
  attributeWithName_URI_stringValue(name: NSString | string, URI: NSString | string, stringValue: NSString | string): any;
  namespaceWithName_stringValue(name: NSString | string, stringValue: NSString | string): any;
  processingInstructionWithName_stringValue(name: NSString | string, stringValue: NSString | string): any;
  commentWithStringValue(stringValue: NSString | string): any;
  textWithStringValue(stringValue: NSString | string): any;
  DTDNodeWithXMLString(string: NSString | string): any;
  localNameForName(name: NSString | string): NSString;
  prefixForName(name: NSString | string): NSString;
  predefinedNamespaceForPrefix(name: NSString | string): NSXMLNode;
  doubleFromString_scale(string: NSString | string, scale: CGFloat): number;
  numberFromString_scale(string: NSString | string, scale: CGFloat): NSNumber;
  numbersFromString_scale(string: NSString | string, scale: CGFloat): NSArray<any>;
  attributeWithName_pixelValue(name: NSString | string, value: CGFloat): any;
  attributeWithName_numberValue(name: NSString | string, value: CGFloat): any;
  attributeWithName_percentageValue(name: NSString | string, value: CGFloat): any;
  attributeWithName_percentageFractionalValue(name: NSString | string, value: CGFloat): any;

}

