"use client";

import { Button } from "../ui/button";
import { useAppDispatch } from "~/redux/store";
import { setIsMassDownloading } from "~/redux/slice/asset-slice";

export default function ResetDownloadStatus() {
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(setIsMassDownloading(false));
    }
    return (
        <Button variant={"secondary"} className="mt-2" onClick={handleClick}>
            Reset Download Status
        </Button>
    );
}
