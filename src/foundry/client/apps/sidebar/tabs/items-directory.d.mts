export {};

declare global {
  /**
   * The sidebar directory which organizes and displays world-level Item documents.
   */
  class ItemDirectory extends DocumentDirectory<"Item"> {
    static override documentName: "Item";

    protected override _canDragDrop(selector: string): boolean;

    protected override _getEntryContextOptions(): ContextMenuEntry[];
  }
}
