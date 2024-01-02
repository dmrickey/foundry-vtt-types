import _tinymce from 'tinymce';
import type * as _tinymceTypes from 'tinymce';

declare global {
  // eslint-disable-next-line no-var
  var tinyMCE: typeof _tinymce;

  namespace tinyMCE {
    type AddOnManager<T> = _tinymceTypes.AddOnManager<T>;
    type Annotator = _tinymceTypes.Annotator;
    type AstNode = _tinymceTypes.AstNode;
    type Bookmark = _tinymceTypes.Bookmark;
    type BookmarkManager = _tinymceTypes.BookmarkManager;
    type Class = _tinymceTypes.Class;
    type Color = _tinymceTypes.Color;
    type ControlSelection = _tinymceTypes.ControlSelection;
    type DOMUtils = _tinymceTypes.DOMUtils;
    type Delay = _tinymceTypes.Delay;
    type DomParser = _tinymceTypes.DomParser;
    type DomParserSettings = _tinymceTypes.DomParserSettings;
    type DomQuery = _tinymceTypes.DomQuery;
    type DomSerializer = _tinymceTypes.DomSerializer;
    type DomSerializerSettings = _tinymceTypes.DomSerializerSettings;
    type DomTreeWalker = _tinymceTypes.DomTreeWalker;
    type Editor = _tinymceTypes.Editor;
    type EditorCommands = _tinymceTypes.EditorCommands;
    type EditorEvent<T> = _tinymceTypes.EditorEvent<T>;
    type EditorManager = _tinymceTypes.EditorManager;
    type EditorModeApi = _tinymceTypes.EditorModeApi;
    type EditorObservable = _tinymceTypes.EditorObservable;
    type EditorSelection = _tinymceTypes.EditorSelection;
    type EditorSettings = _tinymceTypes.EditorSettings;
    type Entities = _tinymceTypes.Entities;
    type Env = _tinymceTypes.Env;
    type EventDispatcher<T> = _tinymceTypes.EventDispatcher<T>;
    type EventUtils = _tinymceTypes.EventUtils;
    type FocusManager = _tinymceTypes.FocusManager;
    type Formatter = _tinymceTypes.Formatter;
    type GeomRect = _tinymceTypes.GeomRect;
    type HtmlSerializer = _tinymceTypes.HtmlSerializer;
    type HtmlSerializerSettings = _tinymceTypes.HtmlSerializerSettings;
    type I18n = _tinymceTypes.I18n;
    type IconManager = _tinymceTypes.IconManager;
    type JSON = _tinymceTypes.JSON;
    type JSONP = _tinymceTypes.JSONP;
    type JSONRequest = _tinymceTypes.JSONRequest;
    type JSONRequestArgs = _tinymceTypes.JSONRequestArgs;
    type JSONRequestSettings = _tinymceTypes.JSONRequestSettings;
    type NotificationApi = _tinymceTypes.NotificationApi;
    type NotificationManager = _tinymceTypes.NotificationManager;
    type NotificationSpec = _tinymceTypes.NotificationSpec;
    type Observable<T> = _tinymceTypes.Observable<T>;
    type Plugin = _tinymceTypes.Plugin;
    type PluginManager = _tinymceTypes.PluginManager;
    type RangeUtils = _tinymceTypes.RangeUtils;
    type RawEditorSettings = _tinymceTypes.RawEditorSettings;
    type Rect = _tinymceTypes.Rect;
    type Resource = _tinymceTypes.Resource;
    type SaxParser = _tinymceTypes.SaxParser;
    type SaxParserSettings = _tinymceTypes.SaxParserSettings;
    type Schema = _tinymceTypes.Schema;
    type SchemaSettings = _tinymceTypes.SchemaSettings;
    type ScriptLoader = _tinymceTypes.ScriptLoader;
    type Shortcuts = _tinymceTypes.Shortcuts;
    type StyleSheetLoader = _tinymceTypes.StyleSheetLoader;
    type Styles = _tinymceTypes.Styles;
    type TextSeeker = _tinymceTypes.TextSeeker;
    type Theme = _tinymceTypes.Theme;
    type ThemeManager = _tinymceTypes.ThemeManager;
    type TinyMCE = _tinymceTypes.TinyMCE;
    type Tools = _tinymceTypes.Tools;
    type URI = _tinymceTypes.URI;
    type UndoManager = _tinymceTypes.UndoManager;
    type VK = _tinymceTypes.VK;
    type WindowManager = _tinymceTypes.WindowManager;
    type Writer = _tinymceTypes.Writer;
    type WriterSettings = _tinymceTypes.WriterSettings;
    type XHR = _tinymceTypes.XHR;
    type XHRSettings = _tinymceTypes.XHRSettings;
  }

  // eslint-disable-next-line no-var
  var tinymce: typeof _tinymce;
}
