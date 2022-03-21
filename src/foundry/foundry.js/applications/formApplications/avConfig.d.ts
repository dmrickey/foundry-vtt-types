/**
 * Audio/Video Conferencing Configuration Sheet
 *
 * @typeParam Options - The type of the options object
 * @typeParam Data    - The data structure used to render the handlebars template.
 */
declare class AVConfig<
  Options extends FormApplicationOptions = FormApplicationOptions,
  Data extends object = AVConfig.Data
> extends FormApplication<Options, Data, AVMaster> {
  /**
   * @param object  - The {@link AVMaster} instance being configured.
   * @param options - Application configuration options.
   */
  constructor(object?: AVMaster | undefined, options?: Partial<Options> | undefined);

  /** @override */
  static get defaultOptions(): FormApplicationOptions;

  /** @override */
  getData(options: Partial<Options>): Promise<Data>;

  /** @override */
  activateListeners(html: JQuery): void;

  /**
   * Set a section's input to enabled or disabled
   * @param selector - Selector for the section to enable or disable
   * @param enabled  - Whether to enable or disable this section
   *                   (default: true)
   * @internal
   */
  protected _setConfigSectionEnabled(selector: string, enabled?: boolean): void;

  /**
   * Determine whether a given video or audio source, or audio sink has become
   * unavailable since the last time it was set.
   * @param sources - The available devices
   * @param source  - The selected device
   * @internal
   */
  protected _isSourceUnavailable(sources: Record<string, string>, source: string): boolean;

  /**
   * Callback when the turn server type changes
   * Will enable or disable the turn section based on whether the user selected a custom turn or not
   * @param event - The event that triggered the turn server type change
   * @internal
   */
  protected _onTurnTypeChanged(event: JQuery.ChangeEvent): void;

  /** @override */
  protected _updateObject(event: Event, formData?: object): Promise<void>;
}

declare namespace AVConfig {
  interface Data {
    user: Game['user'];
    modes: {
      [Key in ValueOf<typeof AVSettings.AV_MODES>]: string;
    };
    voiceModes: {
      [Key in ValueOf<typeof AVSettings.VOICE_MODES>]: string;
    };
    serverTypes: {
      FVTT: string;
      custom: string;
    };
    turnTypes: {
      FVTT: string;
      custom: string;
    };
    settings: AVSettings;
    canSelectMode: boolean;
    noSSL: boolean;
    videoSources: Record<string, string>;
    audioSources: Record<string, string>;
    audioSinks: Record<string, string> | false;
    videoSrcUnavailable: boolean;
    audioSrcUnavailable: boolean;
    audioSinkUnavailable: boolean;
    audioDisabled: boolean;
    videoDisabled: boolean;
  }
}
