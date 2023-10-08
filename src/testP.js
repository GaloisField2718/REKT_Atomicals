import { Stack, Typography } from "@mui/material";
import AssetsAtomicals from "./ListComp/AssetsAtomicals";
import AtomicalsSearch from "./AtomicalsSearch";
import AtomicalsLocationSearch from "./AtomicalsLocationSearch";

// pages/Home.js
export function Home() {
    return <Stack width='100%' display='flex' alignItems='center' gap={4}>

        <Typography variant="h2" fontWeight={600} fontFamily='AR One Sans'>
            ARC-20
        </Typography>
        <Typography variant="body1" fontFamily='AR One Sans' color='red'>
            (unstable version)
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
    return <div>
        <AtomicalsLocationSearch />
    </div>;
}
