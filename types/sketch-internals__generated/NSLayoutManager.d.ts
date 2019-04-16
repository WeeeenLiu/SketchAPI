interface NSLayoutManagerUninitialized<InitializedType = NSLayoutManager> extends NSObjectUninitialized<NSLayoutManager> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSLayoutManager extends NSObject, INSCoding {
  replaceTextStorage(newTextStorage: NSTextStorage): void;
  addTextContainer(container: NSTextContainer): void;
  insertTextContainer_atIndex(container: NSTextContainer, index: NSUInteger): void;
  removeTextContainerAtIndex(index: NSUInteger): void;
  textContainerChangedGeometry(container: NSTextContainer): void;
  textContainerChangedTextView(container: NSTextContainer): void;
  invalidateGlyphsForCharacterRange_changeInLength_actualCharacterRange(charRange: NSRange, delta: NSInteger, actualCharRange: NSRangePointer | null): void;
  invalidateLayoutForCharacterRange_actualCharacterRange(charRange: NSRange, actualCharRange: NSRangePointer | null): void;
  invalidateDisplayForCharacterRange(charRange: NSRange): void;
  invalidateDisplayForGlyphRange(glyphRange: NSRange): void;
  processEditingForTextStorage_edited_range_changeInLength_invalidatedRange(textStorage: NSTextStorage, editMask: NSTextStorageEditActions, newCharRange: NSRange, delta: NSInteger, invalidatedCharRange: NSRange): void;
  ensureGlyphsForCharacterRange(charRange: NSRange): void;
  ensureGlyphsForGlyphRange(glyphRange: NSRange): void;
  ensureLayoutForCharacterRange(charRange: NSRange): void;
  ensureLayoutForGlyphRange(glyphRange: NSRange): void;
  ensureLayoutForTextContainer(container: NSTextContainer): void;
  ensureLayoutForBoundingRect_inTextContainer(bounds: NSRect, container: NSTextContainer): void;
  setGlyphs_properties_characterIndexes_font_forGlyphRange(glyphs: CGGlyph, props: NSGlyphProperty, charIndexes: NSUInteger, aFont: NSFont, glyphRange: NSRange): void;
  CGGlyphAtIndex_isValidIndex(glyphIndex: NSUInteger, isValidIndex: boolean | null): CGGlyph;
  CGGlyphAtIndex(glyphIndex: NSUInteger): CGGlyph;
  isValidGlyphIndex(glyphIndex: NSUInteger): boolean;
  propertyForGlyphAtIndex(glyphIndex: NSUInteger): NSGlyphProperty;
  characterIndexForGlyphAtIndex(glyphIndex: NSUInteger): NSUInteger;
  glyphIndexForCharacterAtIndex(charIndex: NSUInteger): NSUInteger;
  getGlyphsInRange_glyphs_properties_characterIndexes_bidiLevels(glyphRange: NSRange, glyphBuffer: CGGlyph | null, props: NSGlyphProperty | null, charIndexBuffer: NSUInteger | null, bidiLevelBuffer: string | null): NSUInteger;
  setTextContainer_forGlyphRange(container: NSTextContainer, glyphRange: NSRange): void;
  setLineFragmentRect_forGlyphRange_usedRect(fragmentRect: NSRect, glyphRange: NSRange, usedRect: NSRect): void;
  setExtraLineFragmentRect_usedRect_textContainer(fragmentRect: NSRect, usedRect: NSRect, container: NSTextContainer): void;
  setLocation_forStartOfGlyphRange(location: NSPoint, glyphRange: NSRange): void;
  setNotShownAttribute_forGlyphAtIndex(flag: boolean, glyphIndex: NSUInteger): void;
  setDrawsOutsideLineFragment_forGlyphAtIndex(flag: boolean, glyphIndex: NSUInteger): void;
  setAttachmentSize_forGlyphRange(attachmentSize: NSSize, glyphRange: NSRange): void;
  getFirstUnlaidCharacterIndex_glyphIndex(charIndex: NSUInteger | null, glyphIndex: NSUInteger | null): void;
  firstUnlaidCharacterIndex(): NSUInteger;
  firstUnlaidGlyphIndex(): NSUInteger;
  textContainerForGlyphAtIndex_effectiveRange(glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null): NSTextContainer;
  textContainerForGlyphAtIndex_effectiveRange_withoutAdditionalLayout(glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null, flag: boolean): NSTextContainer;
  usedRectForTextContainer(container: NSTextContainer): NSRect;
  lineFragmentRectForGlyphAtIndex_effectiveRange(glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null): NSRect;
  lineFragmentRectForGlyphAtIndex_effectiveRange_withoutAdditionalLayout(glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null, flag: boolean): NSRect;
  lineFragmentUsedRectForGlyphAtIndex_effectiveRange(glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null): NSRect;
  lineFragmentUsedRectForGlyphAtIndex_effectiveRange_withoutAdditionalLayout(glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null, flag: boolean): NSRect;
  locationForGlyphAtIndex(glyphIndex: NSUInteger): NSPoint;
  notShownAttributeForGlyphAtIndex(glyphIndex: NSUInteger): boolean;
  drawsOutsideLineFragmentForGlyphAtIndex(glyphIndex: NSUInteger): boolean;
  attachmentSizeForGlyphAtIndex(glyphIndex: NSUInteger): NSSize;
  truncatedGlyphRangeInLineFragmentForGlyphAtIndex(glyphIndex: NSUInteger): NSRange;
  glyphRangeForCharacterRange_actualCharacterRange(charRange: NSRange, actualCharRange: NSRangePointer | null): NSRange;
  characterRangeForGlyphRange_actualGlyphRange(glyphRange: NSRange, actualGlyphRange: NSRangePointer | null): NSRange;
  glyphRangeForTextContainer(container: NSTextContainer): NSRange;
  rangeOfNominallySpacedGlyphsContainingIndex(glyphIndex: NSUInteger): NSRange;
  boundingRectForGlyphRange_inTextContainer(glyphRange: NSRange, container: NSTextContainer): NSRect;
  glyphRangeForBoundingRect_inTextContainer(bounds: NSRect, container: NSTextContainer): NSRange;
  glyphRangeForBoundingRectWithoutAdditionalLayout_inTextContainer(bounds: NSRect, container: NSTextContainer): NSRange;
  glyphIndexForPoint_inTextContainer_fractionOfDistanceThroughGlyph(point: NSPoint, container: NSTextContainer, partialFraction: CGFloat | null): NSUInteger;
  glyphIndexForPoint_inTextContainer(point: NSPoint, container: NSTextContainer): NSUInteger;
  fractionOfDistanceThroughGlyphForPoint_inTextContainer(point: NSPoint, container: NSTextContainer): CGFloat;
  characterIndexForPoint_inTextContainer_fractionOfDistanceBetweenInsertionPoints(point: NSPoint, container: NSTextContainer, partialFraction: CGFloat | null): NSUInteger;
  getLineFragmentInsertionPointsForCharacterAtIndex_alternatePositions_inDisplayOrder_positions_characterIndexes(charIndex: NSUInteger, aFlag: boolean, dFlag: boolean, positions: CGFloat | null, charIndexes: NSUInteger | null): NSUInteger;
  enumerateLineFragmentsForGlyphRange_usingBlock(glyphRange: NSRange, block: Block): void;
  enumerateEnclosingRectsForGlyphRange_withinSelectedGlyphRange_inTextContainer_usingBlock(glyphRange: NSRange, selectedRange: NSRange, textContainer: NSTextContainer, block: Block): void;
  drawBackgroundForGlyphRange_atPoint(glyphsToShow: NSRange, origin: NSPoint): void;
  drawGlyphsForGlyphRange_atPoint(glyphsToShow: NSRange, origin: NSPoint): void;
  showCGGlyphs_positions_count_font_matrix_attributes_inContext(glyphs: CGGlyph, positions: NSPoint, glyphCount: NSUInteger, font: NSFont, textMatrix: NSAffineTransform, attributes: NSDictionary<any, any> | {[key: string]: any}, graphicsContext: NSGraphicsContext): void;
  fillBackgroundRectArray_count_forCharacterRange_color(rectArray: NSRect, rectCount: NSUInteger, charRange: NSRange, color: NSColor): void;
  drawUnderlineForGlyphRange_underlineType_baselineOffset_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: NSRange, underlineVal: NSUnderlineStyle, baselineOffset: CGFloat, lineRect: NSRect, lineGlyphRange: NSRange, containerOrigin: NSPoint): void;
  underlineGlyphRange_underlineType_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: NSRange, underlineVal: NSUnderlineStyle, lineRect: NSRect, lineGlyphRange: NSRange, containerOrigin: NSPoint): void;
  drawStrikethroughForGlyphRange_strikethroughType_baselineOffset_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: NSRange, strikethroughVal: NSUnderlineStyle, baselineOffset: CGFloat, lineRect: NSRect, lineGlyphRange: NSRange, containerOrigin: NSPoint): void;
  strikethroughGlyphRange_strikethroughType_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: NSRange, strikethroughVal: NSUnderlineStyle, lineRect: NSRect, lineGlyphRange: NSRange, containerOrigin: NSPoint): void;
  showAttachmentCell_inRect_characterIndex(cell: NSCell, rect: NSRect, attachmentIndex: NSUInteger): void;
  setLayoutRect_forTextBlock_glyphRange(rect: NSRect, block: NSTextBlock, glyphRange: NSRange): void;
  setBoundsRect_forTextBlock_glyphRange(rect: NSRect, block: NSTextBlock, glyphRange: NSRange): void;
  layoutRectForTextBlock_glyphRange(block: NSTextBlock, glyphRange: NSRange): NSRect;
  boundsRectForTextBlock_glyphRange(block: NSTextBlock, glyphRange: NSRange): NSRect;
  layoutRectForTextBlock_atIndex_effectiveRange(block: NSTextBlock, glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null): NSRect;
  boundsRectForTextBlock_atIndex_effectiveRange(block: NSTextBlock, glyphIndex: NSUInteger, effectiveGlyphRange: NSRangePointer | null): NSRect;
  temporaryAttributesAtCharacterIndex_effectiveRange(charIndex: NSUInteger, effectiveCharRange: NSRangePointer | null): NSDictionary<any, any>;
  setTemporaryAttributes_forCharacterRange(attrs: NSDictionary<any, any> | {[key: string]: any}, charRange: NSRange): void;
  addTemporaryAttributes_forCharacterRange(attrs: NSDictionary<any, any> | {[key: string]: any}, charRange: NSRange): void;
  removeTemporaryAttribute_forCharacterRange(attrName: NSAttributedStringKey, charRange: NSRange): void;
  temporaryAttribute_atCharacterIndex_effectiveRange(attrName: NSAttributedStringKey, location: NSUInteger, range: NSRangePointer | null): any;
  temporaryAttribute_atCharacterIndex_longestEffectiveRange_inRange(attrName: NSAttributedStringKey, location: NSUInteger, range: NSRangePointer | null, rangeLimit: NSRange): any;
  temporaryAttributesAtCharacterIndex_longestEffectiveRange_inRange(location: NSUInteger, range: NSRangePointer | null, rangeLimit: NSRange): NSDictionary<any, any>;
  addTemporaryAttribute_value_forCharacterRange(attrName: NSAttributedStringKey, value: any, charRange: NSRange): void;
  defaultLineHeightForFont(theFont: NSFont): CGFloat;
  defaultBaselineOffsetForFont(theFont: NSFont): CGFloat;
  rulerMarkersForTextView_paragraphStyle_ruler(view: NSTextView, style: NSParagraphStyle, ruler: NSRulerView): NSArray<any>;
  rulerAccessoryViewForTextView_paragraphStyle_ruler_enabled(view: NSTextView, style: NSParagraphStyle, ruler: NSRulerView, isEnabled: boolean): NSView;
  layoutManagerOwnsFirstResponderInWindow(window: NSWindow): boolean;
  glyphAtIndex_isValidIndex(glyphIndex: NSUInteger, isValidIndex: boolean | null): NSGlyph;
  glyphAtIndex(glyphIndex: NSUInteger): NSGlyph;
  rectArrayForCharacterRange_withinSelectedCharacterRange_inTextContainer_rectCount(charRange: NSRange, selCharRange: NSRange, container: NSTextContainer, rectCount: NSUInteger): NSRectArray;
  rectArrayForGlyphRange_withinSelectedGlyphRange_inTextContainer_rectCount(glyphRange: NSRange, selGlyphRange: NSRange, container: NSTextContainer, rectCount: NSUInteger): NSRectArray;
  substituteFontForFont(originalFont: NSFont): NSFont;
  insertGlyphs_length_forStartingGlyphAtIndex_characterIndex(glyphs: NSGlyph, length: NSUInteger, glyphIndex: NSUInteger, charIndex: NSUInteger): void;
  insertGlyph_atGlyphIndex_characterIndex(glyph: NSGlyph, glyphIndex: NSUInteger, charIndex: NSUInteger): void;
  replaceGlyphAtIndex_withGlyph(glyphIndex: NSUInteger, newGlyph: NSGlyph): void;
  deleteGlyphsInRange(glyphRange: NSRange): void;
  setCharacterIndex_forGlyphAtIndex(charIndex: NSUInteger, glyphIndex: NSUInteger): void;
  setIntAttribute_value_forGlyphAtIndex(attributeTag: NSInteger, val: NSInteger, glyphIndex: NSUInteger): void;
  invalidateGlyphsOnLayoutInvalidationForGlyphRange(glyphRange: NSRange): void;
  intAttribute_forGlyphAtIndex(attributeTag: NSInteger, glyphIndex: NSUInteger): NSInteger;
  getGlyphsInRange_glyphs_characterIndexes_glyphInscriptions_elasticBits(glyphRange: NSRange, glyphBuffer: NSGlyph | null, charIndexBuffer: NSUInteger | null, inscribeBuffer: NSGlyphInscription | null, elasticBuffer: boolean | null): NSUInteger;
  getGlyphsInRange_glyphs_characterIndexes_glyphInscriptions_elasticBits_bidiLevels(glyphRange: NSRange, glyphBuffer: NSGlyph | null, charIndexBuffer: NSUInteger | null, inscribeBuffer: NSGlyphInscription | null, elasticBuffer: boolean | null, bidiLevelBuffer: string | null): NSUInteger;
  getGlyphs_range(glyphArray: NSGlyph | null, glyphRange: NSRange): NSUInteger;
  invalidateLayoutForCharacterRange_isSoft_actualCharacterRange(charRange: NSRange, flag: boolean, actualCharRange: NSRangePointer | null): void;
  textStorage_edited_range_changeInLength_invalidatedRange(str: NSTextStorage, editedMask: NSTextStorageEditedOptions, newCharRange: NSRange, delta: NSInteger, invalidatedCharRange: NSRange): void;
  setLocations_startingGlyphIndexes_count_forGlyphRange(locations: NSPointArray, glyphIndexes: NSUInteger, count: NSUInteger, glyphRange: NSRange): void;
  showPackedGlyphs_length_glyphRange_atPoint_font_color_printingAdjustment(glyphs: string, glyphLen: NSUInteger, glyphRange: NSRange, point: NSPoint, font: NSFont, color: NSColor, printingAdjustment: NSSize): void;
  temporaryAttributesForKey(key: NSString | string): NSDictionary<any, any>;
  setTemporaryAttributes_forKey(attrs: NSDictionary<any, any> | {[key: string]: any}, key: NSString | string): void;

  textStorage(): NSTextStorage;
  setTextStorage(textStorage: NSTextStorage): void;
  textContainers(): NSArray<any>;
  delegate(): any;
  setDelegate(delegate: any): void;
  showsInvisibleCharacters(): boolean;
  setShowsInvisibleCharacters(showsInvisibleCharacters: boolean): void;
  showsControlCharacters(): boolean;
  setShowsControlCharacters(showsControlCharacters: boolean): void;
  hyphenationFactor(): number;
  setHyphenationFactor(hyphenationFactor: number): void;
  usesFontLeading(): boolean;
  setUsesFontLeading(usesFontLeading: boolean): void;
  allowsNonContiguousLayout(): boolean;
  setAllowsNonContiguousLayout(allowsNonContiguousLayout: boolean): void;
  hasNonContiguousLayout(): boolean;
  limitsLayoutForSuspiciousContents(): boolean;
  setLimitsLayoutForSuspiciousContents(limitsLayoutForSuspiciousContents: boolean): void;
  backgroundLayoutEnabled(): boolean;
  setBackgroundLayoutEnabled(backgroundLayoutEnabled: boolean): void;
  defaultAttachmentScaling(): NSImageScaling;
  setDefaultAttachmentScaling(defaultAttachmentScaling: NSImageScaling): void;
  typesetter(): NSTypesetter;
  setTypesetter(typesetter: NSTypesetter): void;
  typesetterBehavior(): NSTypesetterBehavior;
  setTypesetterBehavior(typesetterBehavior: NSTypesetterBehavior): void;
  numberOfGlyphs(): NSUInteger;
  extraLineFragmentRect(): NSRect;
  extraLineFragmentUsedRect(): NSRect;
  extraLineFragmentTextContainer(): NSTextContainer;
  firstTextView(): NSTextView;
  textViewForBeginningOfSelection(): NSTextView;
  usesScreenFonts(): boolean;
  setUsesScreenFonts(usesScreenFonts: boolean): void;
  glyphGenerator(): NSGlyphGenerator;
  setGlyphGenerator(glyphGenerator: NSGlyphGenerator): void;
}
declare const NSLayoutManager: {
  alloc(): NSLayoutManagerUninitialized;
  class(): NSLayoutManager;
}

