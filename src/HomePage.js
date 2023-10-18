import { Stack } from '@mui/material';
import React from 'react';

function HomePage() {
    return (
        <Stack width='90%' py={2} className="atomicals-home-page">
            <h1>Atomicals Protocol</h1>

            <section>
                <h2>What is the Atomicals Protocol?</h2>
                <p>The Atomicals Protocol is a simple, yet flexible protocol for minting, transferring, and updating digital objects (traditionally called non-fungible tokens) for unspent transaction output (UTXO) blockchains such as Bitcoin. An Atomical (or "atom") is a way to organize the creation, transfer, and updates of digital objects – it is essentially a chain of digital ownership defined according to a few simple rules.</p>
            </section>

            <section>
                <h2>Why use Atomicals?</h2>
                <p>The Atomical specification is the simplest possible way to organize digital property on a blockchain such as Bitcoin. The implementation is very simple and provides the maximum flexibility for static and dynamic digital assets, artifacts, and objects. The rules are so simple that it's impossible to accidentally spend Atomicals as miner fees and it's trivial to verify that ownership was transferred to the correct recipient – without relying on any third parties whatsoever or even being required to run an indexer. Atomicals are self-evident digital object histories. Most developers and services will prefer the convenience of running their own indexer and all the benefits that come along with it.</p>
            </section>

            <section>
                <h2>Use Cases</h2>
                <ul>
                    <li>Digital collectibles, media, and art</li>
                    <li>Digital identity, authentication, and token-gated content</li>
                    <li>Web hosting and file storage</li>
                    <li>Peer to peer exchange and atomic swaps</li>
                    <li>Digital namespace allocation</li>
                    <li>Virtual land and title registries</li>
                    <li>Dynamic objects and state for games</li>
                    <li>Social media profiles, posts, and communities</li>
                    <li>Anywhere security and decentralization is a critical concern. Military-grade security and verification requirements.</li>
                </ul>
            </section>

            <section>
                <h2>The Philosophy of Atomicals</h2>
                <p>The usage philosophy of Atomicals is to pass along the complete history of an Atomical digital object from mint inception and including every transfer updates. Even if an Atomical is updated or exchanges hands 10,000 times – that amounts to only about 2.5 MB of data (250 bytes x 10,000). A digital object is a self-evident, unforgeable chain of authenticity that does not rely on any third-party service or centralized indexer for verification purposes.</p>
            </section>

            <section>
                <h2>Motto</h2>
                <blockquote>"No transaction history, not your digital object"</blockquote>
                <p>Any client, wallet, marketplace, game, and service can rapidly verify the Atomical by processing the history according to the very simple rules and detect a fake instantly without relying on trusted services.</p>
            </section>
        </Stack>
    );
}

export default HomePage;
