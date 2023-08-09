import { useState } from "react";
import coverImage from "../assets/coverimage.jpg";
export default function CoverImage() {
    return (
    <div className="flex items-center justify-center">
        <img src={coverImage} alt="Example" className="w-32 h-32" />
    </div>
        );
}