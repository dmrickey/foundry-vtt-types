// FOUNDRY_VERSION: 10.291

import type Document from "../abstract/document.mjs";
import type { DocumentMetadata } from "../abstract/document.mjs";
import type * as fields from "../data/fields.mjs";
import type { CONST } from "../module.mjs.js";

declare global {
  type PlaylistSoundData = BasePlaylistSound.Properties;
}

/**
 * The Document definition for a PlaylistSound.
 * Defines the DataSchema and common behaviors for a PlaylistSound which are shared between both client and server.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BasePlaylistSound extends BasePlaylistSound.Properties {}
declare class BasePlaylistSound extends Document<BasePlaylistSound.SchemaField, BasePlaylistSound.Metadata> {
  /**
   * @param data    - Initial data from which to construct the PlaylistSound
   * @param context - Construction context options
   */
  constructor(data: BasePlaylistSound.ConstructorData, context?: DocumentConstructionContext);

  static override metadata: BasePlaylistSound.Metadata;

  static override defineSchema(): BasePlaylistSound.Schema;

  override testUserPermission(
    user: foundry.documents.BaseUser,
    permission: keyof typeof CONST.DOCUMENT_OWNERSHIP_LEVELS | CONST.DOCUMENT_OWNERSHIP_LEVELS,
    {
      exact
    }?: {
      /**
       * Require the exact permission level requested?
       * @defaultValue `false`
       */
      exact?: boolean;
    }
  ): boolean;
}
export default BasePlaylistSound;

declare namespace BasePlaylistSound {
  type Metadata = Merge<
    DocumentMetadata,
    {
      name: "PlaylistSound";
      collection: "sounds";
      indexed: true;
      label: "DOCUMENT.PlaylistSound";
      labelPlural: "DOCUMENT.PlaylistSounds";
    }
  >;

  type SchemaField = fields.SchemaField<Schema>;
  type ConstructorData = UpdateData & Required<Pick<UpdateData, "name">>;
  type UpdateData = fields.SchemaField.InnerAssignmentType<Schema>;
  type Properties = fields.SchemaField.InnerInitializedType<Schema>;
  type Source = fields.SchemaField.InnerPersistedType<Schema>;

  interface Schema extends DataSchema {
    /**
     * The _id which uniquely identifies this PlaylistSound document
     * @defaultValue `null`
     */
    _id: fields.DocumentIdField;

    /**
     * The name of this sound
     * @defaultValue `""`
     */
    name: fields.StringField<{ required: true; blank: false }>;

    /**
     * The description of this sound
     * @defaultValue `""`
     */
    description: fields.StringField;

    /**
     * The audio file path that is played by this sound
     * @defaultValue `null`
     */
    path: fields.FilePathField<{ categories: ["AUDIO"] }>;

    /**
     * Is this sound currently playing?
     * @defaultValue `false`
     */
    playing: fields.BooleanField;

    /**
     * The time in seconds at which playback was paused
     * @defaultValue `null`
     */
    pausedTime: fields.NumberField<{ min: 0 }>;

    /**
     * Does this sound loop?
     * @defaultValue `false`
     */
    repeat: fields.BooleanField;

    /**
     * The audio volume of the sound, from 0 to 1
     * @defaultValue `1`
     */
    volume: fields.AlphaField<{ initial: 0.5; step: 0.01 }>;

    /**
     * A duration in milliseconds to fade volume transition
     * @defaultValue `null`
     */
    fade: fields.NumberField<{ integer: true; min: 0 }>;

    /**
     * The sort order of the PlaylistSound relative to others in the same collection
     * @defaultValue `0`
     */
    sort: fields.IntegerSortField;

    /**
     * An object of optional key/value flags
     * @defaultValue `{}`
     */
    flags: fields.ObjectField.FlagsField<"PlaylistSound">;
  }
}