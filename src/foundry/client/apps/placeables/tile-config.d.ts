import type DataModel from '../../../common/abstract/data.mjs';

declare global {
  /**
   * The Application responsible for configuring a single Tile document within a parent Scene.
   * @typeParam Options - the type of the options object
   * @typeParam Data    - The data structure used to render the handlebars template.
   */
  class TileConfig<
    Options extends TileConfig.Options = TileConfig.Options,
    Data extends object = TileConfig.Data<Options>
  > extends DocumentSheet<Options, Data, InstanceType<ConfiguredTile>> {
    /**
     * @defaultValue
     * ```typescript
     * mergeObject(super.defaultOptions, {
     *   id: "tile-config",
     *   title: game.i18n.localize("TILE.ConfigTitle"),
     *   template: "templates/scene/tile-config.html",
     *   width: 420,
     *   height: "auto",
     *   submitOnChange: true,
     *   tabs: [{navSelector: ".tabs", contentSelector: "form", initial: "basic"}]
     * });
     * ```
     */
    static override get defaultOptions(): TileConfig.Options;

    override close(options?: Application.CloseOptions | undefined): Promise<void>;

    override getData(options?: Partial<Options> | undefined): Data | Promise<Data>;

    protected override _onChangeInput(event: JQuery.ChangeEvent): void;

    protected override _updateObject(event: Event, formData: TileConfig.FormData): Promise<unknown>;
  }

  namespace TileConfig {
    interface Data<Options extends DocumentSheetOptions>
      extends DocumentSheet.Data<InstanceType<ConfiguredTile>, Options> {
      submitText: string;
      occlusionModes: Record<foundry.CONST.TILE_OCCLUSION_MODES, string>;
    }

    type FormData = DataModel.SchemaToSourceInput<foundry.documents.BaseTile['schema']>;

    interface Options extends DocumentSheetOptions {
      /**
       * Configure a preview version of a tile which is not yet saved
       */
      preview?: boolean;
    }
  }
}
