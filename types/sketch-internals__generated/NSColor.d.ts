interface NSColorUninitialized<InitializedType = NSColor> extends NSObjectUninitialized<NSColor> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSColor extends NSObject, INSCopying, INSSecureCoding, INSPasteboardReading, INSPasteboardWriting {
  colorUsingType(type: NSColorType): NSColor;
  colorUsingColorSpace(space: NSColorSpace): NSColor;
  highlightWithLevel(val: CGFloat): NSColor;
  shadowWithLevel(val: CGFloat): NSColor;
  colorWithSystemEffect(systemEffect: NSColorSystemEffect): NSColor;
  set(): void;
  setFill(): void;
  setStroke(): void;
  blendedColorWithFraction_ofColor(fraction: CGFloat, color: NSColor): NSColor;
  colorWithAlphaComponent(alpha: CGFloat): NSColor;
  getRed_green_blue_alpha(red: CGFloat | null, green: CGFloat | null, blue: CGFloat | null, alpha: CGFloat | null): void;
  getHue_saturation_brightness_alpha(hue: CGFloat | null, saturation: CGFloat | null, brightness: CGFloat | null, alpha: CGFloat | null): void;
  getWhite_alpha(white: CGFloat | null, alpha: CGFloat | null): void;
  getCyan_magenta_yellow_black_alpha(cyan: CGFloat | null, magenta: CGFloat | null, yellow: CGFloat | null, black: CGFloat | null, alpha: CGFloat | null): void;
  getComponents(components: CGFloat): void;
  writeToPasteboard(pasteBoard: NSPasteboard): void;
  drawSwatchInRect(rect: NSRect): void;
  colorUsingColorSpaceName_device(name: NSColorSpaceName | null, deviceDescription: NSDictionary<any, any> | {[key: string]: any} | null): NSColor;
  colorUsingColorSpaceName(name: NSColorSpaceName): NSColor;
  fuzzyIsEqual(object: any): boolean;
  newCGColor(): CGColorRef;
  isWhite(): boolean;
  colorByApplyingModifier(modifier: NSString | string): NSColor;
  colorByApplyingModifiers(modifiers: NSArray<any> | any[]): NSColor;
  highlightedColor(): NSColor;
  stringValueWithAlpha(includeAlpha: boolean): NSString;
  hexValue(): NSString;
  colorTranslatedToColorSpace(colorSpace: NSColorSpace): NSColor;

  type(): NSColorType;
  catalogNameComponent(): NSColorListName;
  colorNameComponent(): NSColorName;
  localizedCatalogNameComponent(): NSString;
  localizedColorNameComponent(): NSString;
  redComponent(): CGFloat;
  greenComponent(): CGFloat;
  blueComponent(): CGFloat;
  hueComponent(): CGFloat;
  saturationComponent(): CGFloat;
  brightnessComponent(): CGFloat;
  whiteComponent(): CGFloat;
  cyanComponent(): CGFloat;
  magentaComponent(): CGFloat;
  yellowComponent(): CGFloat;
  blackComponent(): CGFloat;
  colorSpace(): NSColorSpace;
  numberOfComponents(): NSInteger;
  patternImage(): NSImage;
  alphaComponent(): CGFloat;
  CGColor(): CGColorRef;
  colorSpaceName(): NSColorSpaceName;
  manifestComponents(): NSArray<any>;
}
declare const NSColor: {
  alloc(): NSColorUninitialized;
  class(): NSColor;  colorWithColorSpace_components_count(space: NSColorSpace, components: CGFloat, numberOfComponents: NSInteger): NSColor;
  colorWithSRGBRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): NSColor;
  colorWithGenericGamma22White_alpha(white: CGFloat, alpha: CGFloat): NSColor;
  colorWithDisplayP3Red_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): NSColor;
  colorWithWhite_alpha(white: CGFloat, alpha: CGFloat): NSColor;
  colorWithRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): NSColor;
  colorWithHue_saturation_brightness_alpha(hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat): NSColor;
  colorWithColorSpace_hue_saturation_brightness_alpha(space: NSColorSpace, hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat): NSColor;
  colorWithCatalogName_colorName(listName: NSColorListName, colorName: NSColorName): NSColor;
  colorNamed_bundle(name: NSColorName, bundle: NSBundle | null): NSColor;
  colorNamed(name: NSColorName): NSColor;
  colorWithDeviceWhite_alpha(white: CGFloat, alpha: CGFloat): NSColor;
  colorWithDeviceRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): NSColor;
  colorWithDeviceHue_saturation_brightness_alpha(hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat): NSColor;
  colorWithDeviceCyan_magenta_yellow_black_alpha(cyan: CGFloat, magenta: CGFloat, yellow: CGFloat, black: CGFloat, alpha: CGFloat): NSColor;
  colorWithCalibratedWhite_alpha(white: CGFloat, alpha: CGFloat): NSColor;
  colorWithCalibratedRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): NSColor;
  colorWithCalibratedHue_saturation_brightness_alpha(hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat): NSColor;
  colorWithPatternImage(image: NSImage): NSColor;
  colorForControlTint(controlTint: NSControlTint): NSColor;
  colorFromPasteboard(pasteBoard: NSPasteboard): NSColor;
  colorWithCGColor(cgColor: CGColorRef): NSColor;
  colorWithCIColor(color: CIColor): NSColor;
  colorWithGray(gray: CGFloat): NSColor;
  colorWithGray_alpha(gray: CGFloat, alpha: CGFloat): NSColor;
  tintColorIntense(): NSColor;
  tintColorIntenseDark(): NSColor;
  tintColorNormal(): NSColor;
  tintColorNormalDark(): NSColor;
  tintColorMild(): NSColor;
  tintColorMildDark(): NSColor;

  blackColor(): NSColor;
  darkGrayColor(): NSColor;
  lightGrayColor(): NSColor;
  whiteColor(): NSColor;
  grayColor(): NSColor;
  redColor(): NSColor;
  greenColor(): NSColor;
  blueColor(): NSColor;
  cyanColor(): NSColor;
  yellowColor(): NSColor;
  magentaColor(): NSColor;
  orangeColor(): NSColor;
  purpleColor(): NSColor;
  brownColor(): NSColor;
  clearColor(): NSColor;
  labelColor(): NSColor;
  secondaryLabelColor(): NSColor;
  tertiaryLabelColor(): NSColor;
  quaternaryLabelColor(): NSColor;
  linkColor(): NSColor;
  placeholderTextColor(): NSColor;
  windowFrameTextColor(): NSColor;
  selectedMenuItemTextColor(): NSColor;
  alternateSelectedControlTextColor(): NSColor;
  headerTextColor(): NSColor;
  separatorColor(): NSColor;
  gridColor(): NSColor;
  windowBackgroundColor(): NSColor;
  underPageBackgroundColor(): NSColor;
  controlBackgroundColor(): NSColor;
  selectedContentBackgroundColor(): NSColor;
  unemphasizedSelectedContentBackgroundColor(): NSColor;
  alternatingContentBackgroundColors(): NSArray<any>;
  findHighlightColor(): NSColor;
  textColor(): NSColor;
  textBackgroundColor(): NSColor;
  selectedTextColor(): NSColor;
  selectedTextBackgroundColor(): NSColor;
  unemphasizedSelectedTextBackgroundColor(): NSColor;
  unemphasizedSelectedTextColor(): NSColor;
  controlColor(): NSColor;
  controlTextColor(): NSColor;
  selectedControlColor(): NSColor;
  selectedControlTextColor(): NSColor;
  disabledControlTextColor(): NSColor;
  keyboardFocusIndicatorColor(): NSColor;
  scrubberTexturedBackgroundColor(): NSColor;
  systemRedColor(): NSColor;
  systemGreenColor(): NSColor;
  systemBlueColor(): NSColor;
  systemOrangeColor(): NSColor;
  systemYellowColor(): NSColor;
  systemBrownColor(): NSColor;
  systemPinkColor(): NSColor;
  systemPurpleColor(): NSColor;
  systemGrayColor(): NSColor;
  controlAccentColor(): NSColor;
  currentControlTint(): NSControlTint;
  highlightColor(): NSColor;
  shadowColor(): NSColor;
  ignoresAlpha(): boolean;
  setIgnoresAlpha(ignoresAlpha: boolean): void;
  controlHighlightColor(): NSColor;
  controlLightHighlightColor(): NSColor;
  controlShadowColor(): NSColor;
  controlDarkShadowColor(): NSColor;
  scrollBarColor(): NSColor;
  knobColor(): NSColor;
  selectedKnobColor(): NSColor;
  windowFrameColor(): NSColor;
  selectedMenuItemColor(): NSColor;
  headerColor(): NSColor;
  secondarySelectedControlColor(): NSColor;
  alternateSelectedControlColor(): NSColor;
  controlAlternatingRowBackgroundColors(): NSArray<any>;

}

