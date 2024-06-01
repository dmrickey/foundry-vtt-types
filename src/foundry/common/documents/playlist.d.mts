import type { ConfiguredDocumentClassForName } from "../../../types/helperTypes.d.mts";
import type { Merge } from "../../../types/utils.mts";
import type Document from "../abstract/document.mts";
import type { DocumentMetadata } from "../abstract/document.mts";
import type * as fields from "../data/fields.mts";
import type { CONST } from "../module.mts";
import type * as documents from "./module.mts";

declare global {
  type PlaylistData = BasePlaylist.Properties;
}

/**
 * The Document definition for a Playlist.
 * Defines the DataSchema and common behaviors for a Playlist which are shared between both client and server.
 */

interface BasePlaylist extends BasePlaylist.Properties {}
declare class BasePlaylist extends Document<BasePlaylist.SchemaField, BasePlaylist.Metadata> {
  /**
   * @param data    - Initial data from which to construct the Playlist
   * @param context - Construction context options
   */
  constructor(data: BasePlaylist.ConstructorData, context?: DocumentConstructionContext);

  static override metadata: Readonly<BasePlaylist.Metadata>;

  static override defineSchema(): BasePlaylist.Schema;

  static override migrateData(source: object): object;

  static override shimData(
    data: object,
    {
      embedded,
    }?: {
      /**
       * Apply shims to embedded models?
       * @defaultValue `true`
       */
      embedded?: boolean;
    },
  ): object;
}
export default BasePlaylist;

declare namespace BasePlaylist {
  type Metadata = Merge<
    DocumentMetadata,
    {
      name: "Playlist";
      collection: "playlists";
      indexed: true;
      compendiumIndexFields: ["_id", "name", "sort", "folder"];
      embedded: { PlaylistSound: "sounds" };
      label: "DOCUMENT.Playlist";
      labelPlural: "DOCUMENT.Playlists";
    }
  >;

  type SchemaField = fields.SchemaField<Schema>;
  type ConstructorData = UpdateData & Required<Pick<UpdateData, "name">>;
  type UpdateData = fields.SchemaField.InnerAssignmentType<Schema>;
  type Properties = fields.SchemaField.InnerInitializedType<Schema>;
  type Source = fields.SchemaField.InnerPersistedType<Schema>;

  interface Schema extends DataSchema {
    /**
     * The _id which uniquely identifies this Playlist document
     * @defaultValue `null`
     */
    _id: fields.DocumentIdField;

    /**
     * The name of this playlist
     */
    name: fields.StringField<{ required: true; blank: false; textSearch: true }>;

    /**
     * The description of this playlist
     * @defaultValue `""`
     */
    description: fields.StringField<{ textSearch: true }>;

    /**
     * A Collection of PlaylistSounds embedded documents which belong to this playlist
     * @defaultValue `[]`
     */
    sounds: fields.EmbeddedCollectionField<
      typeof documents.BasePlaylistSound,
      InstanceType<ConfiguredDocumentClassForName<"Playlist">>
    >;

    /**
     * The playback mode for sounds in this playlist
     * @defaultValue `CONST.PLAYLIST_MODES.SEQUENTIAL`
     */
    mode: fields.NumberField<{
      required: true;
      choices: CONST.PLAYLIST_MODES[];
      initial: typeof CONST.PLAYLIST_MODES.SEQUENTIAL;
      validationError: "must be a value in CONST.PLAYLIST_MODES";
    }>;

    /**
     * Is this playlist currently playing?
     * @defaultValue `false`
     */
    playing: fields.BooleanField;

    /**
     * A duration in milliseconds to fade volume transition
     * @defaultValue `null`
     */
    fade: fields.NumberField<{ positive: true }>;

    /**
     * The _id of a Folder which contains this playlist
     * @defaultValue `null`
     */
    folder: fields.ForeignDocumentField<documents.BaseFolder>;

    /**
     * The sorting mode used for this playlist.
     * @defaultValue `CONST.PLAYLIST_SORT_MODES.ALPHABETICAL`
     */
    sorting: fields.StringField<{
      required: true;
      choices: CONST.PLAYLIST_SORT_MODES[];
      initial: typeof CONST.PLAYLIST_SORT_MODES.ALPHABETICAL;
      validationError: "must be a value in CONST.PLAYLIST_SORTING_MODES";
    }>;

    /**
     * A seed used for playlist randomization to guarantee that all clients generate the same random order.
     * @defaultValue `null`
     */
    seed: fields.NumberField<{ integer: true; min: 0 }>;

    /**
     * The numeric sort value which orders this playlist relative to its siblings
     * @defaultValue `0`
     */
    sort: fields.IntegerSortField;

    /**
     * An object which configures ownership of this Playlist
     * @defaultValue see {@link fields.DocumentOwnershipField}
     */
    ownership: fields.DocumentOwnershipField;

    /**
     * An object of optional key/value flags
     * @defaultValue `{}`
     */
    flags: fields.ObjectField.FlagsField<"Playlist">;

    /**
     * An object of creation and access information
     * @defaultValue see {@link fields.DocumentStatsField}
     */
    _stats: fields.DocumentStatsField;
  }
}