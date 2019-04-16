declare enum NSXMLParserError {
  NSXMLParserInternalError = 1,
  NSXMLParserOutOfMemoryError = 2,
  NSXMLParserDocumentStartError = 3,
  NSXMLParserEmptyDocumentError = 4,
  NSXMLParserPrematureDocumentEndError = 5,
  NSXMLParserInvalidHexCharacterRefError = 6,
  NSXMLParserInvalidDecimalCharacterRefError = 7,
  NSXMLParserInvalidCharacterRefError = 8,
  NSXMLParserInvalidCharacterError = 9,
  NSXMLParserCharacterRefAtEOFError = 10,
  NSXMLParserCharacterRefInPrologError = 11,
  NSXMLParserCharacterRefInEpilogError = 12,
  NSXMLParserCharacterRefInDTDError = 13,
  NSXMLParserEntityRefAtEOFError = 14,
  NSXMLParserEntityRefInPrologError = 15,
  NSXMLParserEntityRefInEpilogError = 16,
  NSXMLParserEntityRefInDTDError = 17,
  NSXMLParserParsedEntityRefAtEOFError = 18,
  NSXMLParserParsedEntityRefInPrologError = 19,
  NSXMLParserParsedEntityRefInEpilogError = 20,
  NSXMLParserParsedEntityRefInInternalSubsetError = 21,
  NSXMLParserEntityReferenceWithoutNameError = 22,
  NSXMLParserEntityReferenceMissingSemiError = 23,
  NSXMLParserParsedEntityRefNoNameError = 24,
  NSXMLParserParsedEntityRefMissingSemiError = 25,
  NSXMLParserUndeclaredEntityError = 26,
  NSXMLParserUnparsedEntityError = 28,
  NSXMLParserEntityIsExternalError = 29,
  NSXMLParserEntityIsParameterError = 30,
  NSXMLParserUnknownEncodingError = 31,
  NSXMLParserEncodingNotSupportedError = 32,
  NSXMLParserStringNotStartedError = 33,
  NSXMLParserStringNotClosedError = 34,
  NSXMLParserNamespaceDeclarationError = 35,
  NSXMLParserEntityNotStartedError = 36,
  NSXMLParserEntityNotFinishedError = 37,
  NSXMLParserLessThanSymbolInAttributeError = 38,
  NSXMLParserAttributeNotStartedError = 39,
  NSXMLParserAttributeNotFinishedError = 40,
  NSXMLParserAttributeHasNoValueError = 41,
  NSXMLParserAttributeRedefinedError = 42,
  NSXMLParserLiteralNotStartedError = 43,
  NSXMLParserLiteralNotFinishedError = 44,
  NSXMLParserCommentNotFinishedError = 45,
  NSXMLParserProcessingInstructionNotStartedError = 46,
  NSXMLParserProcessingInstructionNotFinishedError = 47,
  NSXMLParserNotationNotStartedError = 48,
  NSXMLParserNotationNotFinishedError = 49,
  NSXMLParserAttributeListNotStartedError = 50,
  NSXMLParserAttributeListNotFinishedError = 51,
  NSXMLParserMixedContentDeclNotStartedError = 52,
  NSXMLParserMixedContentDeclNotFinishedError = 53,
  NSXMLParserElementContentDeclNotStartedError = 54,
  NSXMLParserElementContentDeclNotFinishedError = 55,
  NSXMLParserXMLDeclNotStartedError = 56,
  NSXMLParserXMLDeclNotFinishedError = 57,
  NSXMLParserConditionalSectionNotStartedError = 58,
  NSXMLParserConditionalSectionNotFinishedError = 59,
  NSXMLParserExternalSubsetNotFinishedError = 60,
  NSXMLParserDOCTYPEDeclNotFinishedError = 61,
  NSXMLParserMisplacedCDATAEndStringError = 62,
  NSXMLParserCDATANotFinishedError = 63,
  NSXMLParserMisplacedXMLDeclarationError = 64,
  NSXMLParserSpaceRequiredError = 65,
  NSXMLParserSeparatorRequiredError = 66,
  NSXMLParserNMTOKENRequiredError = 67,
  NSXMLParserNAMERequiredError = 68,
  NSXMLParserPCDATARequiredError = 69,
  NSXMLParserURIRequiredError = 70,
  NSXMLParserPublicIdentifierRequiredError = 71,
  NSXMLParserLTRequiredError = 72,
  NSXMLParserGTRequiredError = 73,
  NSXMLParserLTSlashRequiredError = 74,
  NSXMLParserEqualExpectedError = 75,
  NSXMLParserTagNameMismatchError = 76,
  NSXMLParserUnfinishedTagError = 77,
  NSXMLParserStandaloneValueError = 78,
  NSXMLParserInvalidEncodingNameError = 79,
  NSXMLParserCommentContainsDoubleHyphenError = 80,
  NSXMLParserInvalidEncodingError = 81,
  NSXMLParserExternalStandaloneEntityError = 82,
  NSXMLParserInvalidConditionalSectionError = 83,
  NSXMLParserEntityValueRequiredError = 84,
  NSXMLParserNotWellBalancedError = 85,
  NSXMLParserExtraContentError = 86,
  NSXMLParserInvalidCharacterInEntityError = 87,
  NSXMLParserParsedEntityRefInInternalError = 88,
  NSXMLParserEntityRefLoopError = 89,
  NSXMLParserEntityBoundaryError = 90,
  NSXMLParserInvalidURIError = 91,
  NSXMLParserURIFragmentError = 92,
  NSXMLParserNoDTDError = 94,
  NSXMLParserDelegateAbortedParseError = 512,
}

