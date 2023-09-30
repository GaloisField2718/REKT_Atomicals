import { Stack, Typography } from "@mui/material";
import AssetsAtomicals from "./AssetsAtomicals";
import AtomicalsSearch from "./AtomicalsSearch";

// pages/Home.js
export function Home() {
    return <Stack width='100%' display='flex' alignItems='center' gap={4}>

        <Typography variant="h2">
            ARC-20
        </Typography>
        <AssetsAtomicals />

    </Stack>;
}

// pages/Token.js
export function Token() {
    return <div>
        <AtomicalsSearch />
    </div>;
}

// pages/Nft.js
export function Nft() {
    return <div>NFT Page</div>;
}
