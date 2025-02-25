/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import React from "react";

interface ProductColorPickerProps {
  colors: string[];
}

function ProductColorPicker({ colors }: ProductColorPickerProps) {
  const [selectedColor, setSelectedColor] =
    React.useState<string>("No color selected");
  const [colorCode, setColorCode] = React.useState<string[]>(colors);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-base font-semibold capitalize">colors</h2>
      <div className="flex gap-x-4 justify-start items-center my-2">
        {colorCode.map((color, index) => (
          <Button
            key={index}
            type="button"
            variant={"outline"}
            style={{ backgroundColor: color }}
            className="`w-4 h-4 p-3 hover:border-slate-600 border-2"
            onClick={() => handleColorSelect(colors[index])}
          ></Button>
        ))}
      </div>
    </div>
  );
}

export default ProductColorPicker;
