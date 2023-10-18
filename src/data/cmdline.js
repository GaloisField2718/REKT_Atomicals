// data.js
const commandData = [
    {
        cmdline: 'server-version',
        description: 'Get electrumx server version info',
        args: []
    },
    {
        cmdline: 'wallet-create',
        description: 'Creates and displays new 12-word secret mnemonic phrase along with the primary and funding addresses',
        args: []
    },
    {
        cmdline: 'wallet-decode [options] <phrase>',
        description: 'Decode secret mnemonic phrase to display derive address and key at provided path',
        args: []
    },
    {
        cmdline: 'wallet-init',
        description: 'Initializes a new wallet at wallet.json',
        args: []
    },
    {
        cmdline: 'wallet-import <wif> <alias>',
        description: 'Import a wallet by WIF and assign it to provided alias',
        args: []
    },
    {
        cmdline: 'address-script <addressOrAlias>',
        description: 'Encodes an address or wallet alias as the hex output script',
        args: []
    },
    {
        cmdline: 'address [options] <address>',
        description: 'Get balances and Atomicals stored at an address',
        args: []
    },
    {
        cmdline: 'wallets [options]',
        description: 'Get balances and atomicals stored at internal wallets',
        args: []
    },
    {
        cmdline: 'balances [options]',
        description: 'Get balances and atomicals stored at internal wallets',
        args: []
    },
    {
        cmdline: 'address-utxos <address>',
        description: 'List all utxos owned by an address',
        args: []
    },
    {
        cmdline: 'address-history <address>',
        description: 'List address history of an address',
        args: []
    },
    {
        cmdline: 'tx [options] <txid>',
        description: 'Get any transaction',
        args: [
            {
                flag: '<Usage:>',
                description: 'Atomicals CLI Utility tx [options] <txid>'
            },
            { flag: '<Get>', description: 'any transaction' },
            { flag: '<txid>', description: 'string' },
            { flag: '--verbose', description: 'Verbose output' },
            { flag: '-h,', description: '--help display help for command' }
        ]
    },
    {
        cmdline: 'get-ticker [options] <ticker>',
        description: 'Get Atomical by ticker name',
        args: []
    },
    {
        cmdline: 'get-container [options] <container>',
        description: 'Get Atomical by container name',
        args: []
    },
    {
        cmdline: 'resolve [options] <realm_or_subrealm>',
        description: "Resolve a realm or subrealm. Alias for 'get-realm'",
        args: []
    },
    {
        cmdline: 'get-realm [options] <realm_or_subrealm>',
        description: "Resolve a realm or subrealm. Alias for 'resolve'",
        args: []
    },
    {
        cmdline: 'realm-info [options] <atomicalIdAlias>',
        description: 'Get realm and subrealm information of an atomical',
        args: []
    },
    {
        cmdline: 'summary-subrealms [options]',
        description: 'Show summary of owned subrealms by wallet',
        args: []
    },
    {
        cmdline: 'summary-containers [options]',
        description: 'Show summary of owned containers by wallet',
        args: []
    },
    {
        cmdline: 'summary-realms [options]',
        description: 'Show summary of owned realms by wallet',
        args: []
    },
    {
        cmdline: 'summary-tickers [options]',
        description: 'Show summary of owned tokens by tickers by wallet',
        args: []
    },
    {
        cmdline: 'find-tickers [options]',
        description: 'Search tickers',
        args: []
    },
    {
        cmdline: 'find-realms [options]',
        description: 'Search realms',
        args: []
    },
    {
        cmdline: 'find-containers [options]',
        description: 'Search containers',
        args: []
    },
    {
        cmdline: 'set [options] <atomicalIdAlias> <path> <data...>',
        description: 'Set (update) an existing Atomical with data.',
        args: []
    },
    {
        cmdline: 'emit [options] <atomicalIdAlias> <path> <data...>',
        description: 'Emit an event for an existing Atomical with data.',
        args: []
    },
    {
        cmdline: 'set-relation [options] <atomicalId> <relationName> <relationValues...>',
        description: 'Set relationship an existing Atomical with data.',
        args: []
    },
    {
        cmdline: 'delete [options] <atomicalIdAlias> <path> <keystoDelete...>',
        description: 'Delete keys for existing Atomical.',
        args: []
    },
    {
        cmdline: 'seal [options] <atomicalIdAlias>',
        description: 'Seal any NFT Atomical type permanently so that it can never be updated or transferred ever again.',
        args: []
    },
    {
        cmdline: 'splat [options] <locationId>',
        description: 'Extract an NFT Atomical from a UTXO which contains multiple Atomicals',
        args: []
    },
    {
        cmdline: 'split [options] <locationId>',
        description: 'Split operation to seperate the FT Atomicals at a single UTXOs.',
        args: []
    },
    {
        cmdline: 'get [options] <atomicalAliasOrId>',
        description: 'Get the status of an Atomical',
        args: []
    },
    {
        cmdline: 'global [options]',
        description: 'Get global status',
        args: []
    },
    { cmdline: 'dump', description: 'dump', args: [] },
    {
        cmdline: 'location [options] <atomicalAliasOrId>',
        description: 'Get locations of an Atomical',
        args: []
    },
    {
        cmdline: 'ftinfo <atomicalAliasOrId>',
        description: 'Get FT specific info for an FT atomical',
        args: []
    },
    {
        cmdline: 'state [options] <atomicalAliasOrId> <path>',
        description: 'Get the state of an Atomical',
        args: []
    },
    {
        cmdline: 'state-history [options] <atomicalAliasOrId>',
        description: 'Get the state history of an Atomical',
        args: []
    },
    {
        cmdline: 'event-history [options] <atomicalAliasOrId>',
        description: 'Get the event state history of an Atomical',
        args: []
    },
    {
        cmdline: 'enable-subrealms [options] <realmOrSubRealm> <rules...>',
        description: 'Set and enable subrealm minting rules for a realm or subrealm',
        args: []
    },
    {
        cmdline: 'disable-subrealm-mints [options] <realmOrSubRealm>',
        description: 'Delete the subrealm minting rules for a realm or subrealm',
        args: []
    },
    {
        cmdline: 'pending-subrealms [options]',
        description: 'Display pending subrealm Atomical requests and make payments',
        args: []
    },
    {
        cmdline: 'mint-ft [options] <ticker> <supply> <files...>',
        description: 'Mint fungible token (FT) Atomical in direct issuance mode',
        args: []
    },
    {
        cmdline: 'init-dft [options] <ticker> <mint_amount> <max_mints> <mint_height> <files...>',
        description: 'Initialize fungible token (FT) atomical in decentralized issuance mode',
        args: []
    },
    {
        cmdline: 'mint-dft [options] <ticker>',
        description: 'Mint coins for a decentralized fungible token (FT)',
        args: []
    },
    {
        cmdline: 'mint-nft [options] <files...>',
        description: 'Mint non-fungible token (NFT) Atomical',
        args: []
    },
    {
        cmdline: 'mint-realm [options] <realm>',
        description: 'Mint top level Realm non-fungible token (NFT) Atomical',
        args: []
    },
    {
        cmdline: 'mint-subrealm [options] <realm>',
        description: 'Mint subrealm non-fungible token (NFT) Atomical',
        args: []
    },
    {
        cmdline: 'mint-container [options] <container>',
        description: 'Mint container non-fungible token (NFT) Atomical',
        args: []
    },
    {
        cmdline: 'transfer-nft [options] <atomicalId> <address>',
        description: 'Transfer Atomical NFT to new address',
        args: []
    },
    {
        cmdline: 'transfer-ft [options] <atomicalId>',
        description: 'Transfer Atomical FT to other addresses',
        args: []
    },
    {
        cmdline: 'transfer-utxos [options]',
        description: 'Transfer plain regular UTXOs to another addresses',
        args: []
    },
    {
        cmdline: 'merge-atomicals [options]',
        description: 'Merge Atomicals UTXOs together for test purposes',
        args: []
    },
    {
        cmdline: 'tx-history [options] <atomicalAliasOrId>',
        description: 'Get the history of an Atomical',
        args: []
    },
    {
        cmdline: 'list [options]',
        description: 'List feed of Atomicals minted globally',
        args: []
    },
    {
        cmdline: 'address-atomicals <address>',
        description: 'List all atomicals owned by an address',
        args: []
    },
    {
        cmdline: 'at-location <location>',
        description: 'Get Atomicals at a utxo location',
        args: []
    },
    {
        cmdline: 'store-dat [options] <files...>',
        description: 'Store general immutable data transaction that is not an NFT or FT',
        args: []
    },
    {
        cmdline: 'download [options] <locationIdOrTxId>',
        description: 'Download a file from a locationId or atomicalId',
        args: []
    }
]

export default commandData;
