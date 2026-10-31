import { describe, expect, it } from "vitest";
import { contacts } from "@/lib/contacts";

describe("Approved contact destinations", () => {
  it("uses the exact Instagram destination", () => {
    expect(contacts.find((c) => c.id === "instagram")?.href).toBe("https://instagram.com/taban_edit");
  });
  it("uses the corrected Bale destination", () => {
    expect(contacts.find((c) => c.id === "bale")?.href).toBe("https://ble.ir/tabanedit");
  });
  it("uses the case-sensitive Rubika destination", () => {
    expect(contacts.find((c) => c.id === "rubika")?.href).toBe("https://rubika.ir/page/Taban_edit");
  });
  it("uses the corrected Telegram destination", () => {
    expect(contacts.find((c) => c.id === "telegram")?.href).toBe("https://t.me/taban_edit");
  });
  it("has only the four approved contacts", () => {
    expect(contacts.map((c) => c.id)).toEqual(["instagram", "bale", "rubika", "telegram"]);
  });
});