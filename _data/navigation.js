module.exports = {
  navigation: {
    gettingStarted: [
      {
        section: 'Getting Started',
        contents: [
          {
            title: 'Overview',
            url: '/docs/conceptual-overview/',
          },
          {
            title: 'Deploy Your First Contract',
            url: '/docs/deploy-your-first-contract/',
          },
          {
            title: 'Consuming Data Feeds',
            url: '/docs/consuming-data-feeds/',
          },
          {
            title: 'Get Random Numbers',
            url: '/docs/intermediates-tutorial/',
          },
          {
            title: 'API Calls',
            url: '/docs/advanced-tutorial/',
          },
        ],
      },
      {
        section: 'Resources',
        contents: [
          {
            title: 'Videos and Tutorials',
            url: '/docs/other-tutorials/',
          },
        ],
      },
      {
        section: 'Next Steps',
        contents: [
          {
            title: 'Chainlink Architecture',
            url: '/docs/architecture-overview/',
          },
          {
            title: 'Data Feeds',
            url: '/docs/using-chainlink-reference-contracts/',
          },
          {
            title: 'Chainlink VRF',
            url: '/docs/chainlink-vrf/',
          },
          {
            title: 'Chainlink Keepers',
            url: '/docs/chainlink-keepers/introduction/',
          },
          {
            title: 'Connect to Public API Data',
            url: '/docs/request-and-receive-data/',
          },
          {
            title: 'Run a Chainlink Node',
            url: '/chainlink-nodes/',
          },
        ],
      },
    ],
    ethereum: [
      {
        section: 'Overview',
        contents: [
          {
            title: 'Chainlink Architecture',
            url: '/docs/architecture-overview/',
            children: [
              {
                title: 'Basic Request Model',
                url: '/docs/architecture-request-model/',
              },
              {
                title: 'Decentralized Data Model',
                url: '/docs/architecture-decentralized-model/',
              },
              {
                title: 'Off-Chain Reporting',
                url: '/docs/off-chain-reporting/',
              },
            ],
          },
        ],
      },
      {
        section: 'DATA FEEDS',
        contents: [
          {
            title: 'Introduction to Data Feeds',
            url: '/docs/using-chainlink-reference-contracts/',
          },
          {
            title: 'Using Data Feeds',
            url: '/docs/get-the-latest-price/',
          },
          {
            title: 'Historical Price Data',
            url: '/docs/historical-price-data/',
          },
          {
            title: 'Feed Registry',
            url: '/docs/feed-registry/',
          },
          {
            title: 'API Reference',
            url: '/docs/price-feeds-api-reference/',
          },
          {
            title: 'Using ENS with Data Feeds',
            url: '/docs/ens/',
          },
          {
            title: 'Contract Addresses',
            url: '/docs/reference-contracts/',
            children: [
              {
                title: 'Ethereum Data Feeds',
                url: '/docs/ethereum-addresses/',
              },
              {
                title: 'BNB Chain Data Feeds',
                url: '/docs/bnb-chain-addresses/',
              },
              {
                title: 'Polygon (Matic) Data Feeds',
                url: '/docs/matic-addresses/',
              },
              {
                title: 'Gnosis Chain (xDai) Data Feeds',
                url: '/docs/data-feeds-gnosis-chain/',
              },
              {
                title: 'HECO Chain Data Feeds',
                url: '/docs/huobi-eco-chain-price-feeds/',
              },
              {
                title: 'Avalanche Data Feeds',
                url: '/docs/avalanche-price-feeds/',
              },
              {
                title: 'Fantom Data Feeds',
                url: '/docs/fantom-price-feeds/',
              },
              {
                title: 'Arbitrum Data Feeds',
                url: '/docs/arbitrum-price-feeds/',
              },
              {
                title: 'Harmony Data Feeds',
                url: '/docs/harmony-price-feeds/',
              },
              {
                title: 'Optimism Data Feeds',
                url: '/docs/optimism-price-feeds/',
              },
              {
                title: 'Moonriver Data Feeds',
                url: '/docs/data-feeds-moonriver/',
              },
              {
                title: 'Moonbeam Data Feeds',
                url: '/docs/data-feeds-moonbeam/',
              },
              {
                title: 'Metis Data Feeds',
                url: '/docs/data-feeds-metis/',
              },
            ],
          },
          {
            title: 'L2 Sequencer Uptime Feeds',
            url: '/docs/l2-sequencer-flag/',
          },
        ],
      },
      {
        section: 'USING RANDOMNESS',

        contents: [
          {
            title: 'Introduction to Chainlink VRF',
            url: '/docs/vrf/v2/introduction/',
          },
          {
            title: 'Method 1: Subscription',
            url: '/docs/vrf/v2/subscription/',
            children: [
              {
                title: 'Get a Random Number',
                url: '/docs/vrf/v2/subscription/get-a-random-number/',
              },
              {
                title: 'More Examples',
                url: '/docs/vrf/v2/subscription/more-examples/',
              },
              {
                title: 'Configuration',
                url: '/docs/vrf/v2/subscription/configuration/',
              },
              {
                title: 'Migrating to VRF v2',
                url: '/docs/vrf/v2/subscription/migration-v1-v2/',
              },
            ],
          },
          {
            title: 'Method 2: Ad-hoc',
            url: '/docs/vrf/v2/ad-hoc/',
            children: [
              {
                title: 'Get a Random Number',
                url: '/docs/vrf/v2/ad-hoc/get-a-random-number/',
              },
              {
                title: 'Configuration',
                url: '/docs/vrf/v2/ad-hoc/configuration/',
              },
              {
                title: 'Migrating to VRF v2',
                url: '/docs/vrf/v2/ad-hoc/migration-v1-v2/',
              },
            ],
          },
          {
            title: 'Security Considerations',
            url: '/docs/vrf/v2/security/',
          },
          {
            title: 'Best Practices',
            url: '/docs/vrf/v2/best-practices/',
          },
        ],
      },
      {
        section: 'Connect to any API',
        contents: [
          {
            title: 'Introduction to Using Any API',
            url: '/docs/request-and-receive-data/',
          },
          {
            title: 'Make a GET Request',
            url: '/docs/make-a-http-get-request/',
            children: [
              {
                title: 'Single Word Response',
                url: '/docs/single-word-response/',
              },
              {
                title: 'Multi-Variable Responses',
                url: '/docs/multi-variable-responses/',
              },
              {
                title: 'Array Response',
                url: '/docs/api-array-response/',
              },
              {
                title: 'Large Responses',
                url: '/docs/large-responses/',
              },
              {
                title: 'Existing Job Request',
                url: '/docs/existing-job-request/',
              },
            ],
          },
          {
            title: 'Find Existing Jobs',
            url: '/docs/listing-services/',
          },
          {
            title: 'Testnet Nodes and Jobs',
            url: '/docs/any-api-testnet-nodes/',
          },
          {
            title: 'API Reference',
            url: '/docs/chainlink-framework/',
          },
        ],
      },
      {
        section: 'AUTOMATE CONTRACTS',
        contents: [
          {
            title: 'Introduction to Chainlink Keepers',
            url: '/docs/chainlink-keepers/introduction/',
          },
          {
            title: 'Keepers-compatible Contracts',
            url: '/docs/chainlink-keepers/compatible-contracts/',
          },
          {
            title: 'Register an Upkeep',
            url: '/docs/chainlink-keepers/register-upkeep/',
          },
          {
            title: 'Manage your Upkeeps',
            url: '/docs/chainlink-keepers/manage-upkeeps/',
          },
          {
            title: 'Job Scheduler',
            url: '/docs/chainlink-keepers/job-scheduler/',
          },
          {
            title: 'Making Flexible Contracts',
            url: '/docs/chainlink-keepers/flexible-upkeeps/',
          },
          {
            title: 'Utility Contracts',
            url: '/docs/chainlink-keepers/util-overview/',
            children: [
              {
                title: 'EthBalanceMonitor',
                url: '/docs/chainlink-keepers/utility-contracts/',
              },
            ],
          },
          {
            title: 'Keepers Architecture',
            url: '/docs/chainlink-keepers/overview/',
          },
          {
            title: 'Supported Networks',
            url: '/docs/chainlink-keepers/supported-networks/',
          },
          {
            title: 'Keepers Economics',
            url: '/docs/chainlink-keepers/keeper-economics/',
          },
          {
            title: 'FAQs',
            url: '/docs/chainlink-keepers/faqs/',
          },
        ],
      },
      {
        section: 'Resources',
        contents: [
          {
            title: 'Videos and Tutorials',
            url: '/docs/other-tutorials/',
          },
          {
            title: 'Acquire testnet LINK',
            url: '/docs/acquire-link/',
          },
          {
            title: 'Fund Your Contracts',
            url: '/docs/fund-your-contract/',
          },
          {
            title: 'Install Frameworks',
            url: '/docs/create-a-chainlinked-project/',
          },
          {
            title: 'LINK Token Contracts',
            url: '/docs/link-token-contracts/',
          },
          {
            title: 'Developer Communications',
            url: '/docs/developer-communications/',
          },
          {
            title: 'Getting Help',
            url: '/docs/getting-help/',
          },
          {
            title: 'Data Provider Nodes',
            url: '/docs/data-provider-nodes/',
          },
          {
            title: 'Selecting Data Feeds',
            url: '/docs/selecting-data-feeds/',
          },
          {
            title: 'Hackathon Resources',
            url: '/docs/hackathon-resources/',
          },
          {
            title: 'Contributing to Chainlink',
            url: '/docs/contributing-to-chainlink/',
          },
        ],
      },
    ],
    solana: [
      {
        section: 'Solana',
        contents: [
          {
            title: 'Overview',
            url: '/docs/solana/',
          },
        ],
      },
      {
        section: 'Data Feeds',
        contents: [
          {
            title: 'Using Data Feeds Off-Chain',
            url: '/docs/solana/using-data-feeds-off-chain/',
          },
          {
            title: 'Using Data Feeds On-Chain',
            url: '/docs/solana/using-data-feeds-solana/',
          },
          {
            title: 'Data Feed Addresses',
            url: '/docs/solana/data-feeds-solana/',
          },
        ],
      },
      {
        section: 'Resources',
        contents: [
          {
            title: 'Getting Help',
            url: '/docs/getting-help/',
          },
          {
            title: 'Selecting Data Feeds',
            url: '/docs/selecting-data-feeds/',
          },
          {
            title: 'Contributing to Chainlink',
            url: '/docs/contributing-to-chainlink/',
          },
        ],
      },
    ],
    nodeOperator: [
      {
        section: 'NODE OPERATORS',
        contents: [
          {
            title: 'Node Versions',
            url: '/docs/node-versions/',
          },
          {
            title: 'Running a Chainlink Node',
            url: '/docs/running-a-chainlink-node/',
          },
          {
            title: 'Fulfilling Requests',
            url: '/docs/fulfilling-requests/',
          },
          {
            title: 'Run an Ethereum Client',
            url: '/docs/run-an-ethereum-client/',
          },
          {
            title: 'Performing System Maintenance',
            url: '/docs/performing-system-maintenance/',
          },
          {
            title: 'Connecting to a Remote Database',
            url: '/docs/connecting-to-a-remote-database/',
          },
          {
            title: 'Configuring Nodes',
            url: '/docs/configuration-variables/',
          },
          {
            title: 'Enabling HTTPS Connections',
            url: '/docs/enabling-https-connections/',
          },
          {
            title: 'Security and Operation Best Practices',
            url: '/docs/best-security-practices/',
          },
          {
            title: 'Optimizing EVM Performance',
            url: '/docs/evm-performance-configuration/',
          },
          {
            title: 'Best Practices for Nodes on AWS',
            url: '/docs/best-practices-aws/',
          },
          {
            title: 'Miscellaneous',
            url: '/docs/miscellaneous/',
          },
        ],
      },
      {
        section: 'ORACLE JOBS',
        contents: [
          {
            title: 'Migrating to v2 Jobs',
            url: '/docs/jobs/migration-v1-v2/',
          },
          {
            title: 'Jobs',
            url: '/docs/jobs/',
            children: [
              {
                title: 'Cron',
                url: '/docs/jobs/types/cron/',
              },
              {
                title: 'Direct Request',
                url: '/docs/jobs/types/direct-request/',
              },
              {
                title: 'Flux Monitor',
                url: '/docs/jobs/types/flux-monitor/',
              },
              {
                title: 'Keeper',
                url: '/docs/jobs/types/keeper/',
              },
              {
                title: 'Off-chain Reporting',
                url: '/docs/jobs/types/offchain-reporting/',
              },
              {
                title: 'Webhook',
                url: '/docs/jobs/types/webhook/',
              },
            ],
          },
          {
            url: '/docs/tasks/',
            title: 'Tasks',
            children: [
              {
                title: 'Job Pipelines',
                url: '/docs/jobs/task-types/pipelines/',
              },
              {
                title: 'HTTP',
                url: '/docs/jobs/task-types/http/',
              },
              {
                title: 'Bridge',
                url: '/docs/jobs/task-types/bridge/',
              },
              {
                title: 'JSON Parse',
                url: '/docs/jobs/task-types/jsonparse/',
              },
              {
                title: 'CBOR Parse',
                url: '/docs/jobs/task-types/cborparse/',
              },
              {
                title: 'ETH ABI Decode',
                url: '/docs/jobs/task-types/eth-abi-decode/',
              },
              {
                title: 'ETH ABI Decode Log',
                url: '/docs/jobs/task-types/eth-abi-decode-log/',
              },
              {
                title: 'ETH ABI Encode',
                url: '/docs/jobs/task-types/eth-abi-encode/',
              },
              {
                title: 'ETH Call',
                url: '/docs/jobs/task-types/eth-call/',
              },
              {
                title: 'ETH Tx',
                url: '/docs/jobs/task-types/eth-tx/',
              },
              {
                title: 'Multiply',
                url: '/docs/jobs/task-types/multiply/',
              },
              {
                title: 'Divide',
                url: '/docs/jobs/task-types/divide/',
              },

              {
                title: 'Any',
                url: '/docs/jobs/task-types/any/',
              },
              {
                title: 'Mean',
                url: '/docs/jobs/task-types/mean/',
              },
              {
                title: 'Median',
                url: '/docs/jobs/task-types/median/',
              },
              {
                title: 'Mode',
                url: '/docs/jobs/task-types/mode/',
              },
              {
                title: 'Sum',
                url: '/docs/jobs/task-types/sum/',
              },
            ],
          },
        ],
      },
      {
        section: 'EXTERNAL ADAPTERS',
        contents: [
          {
            title: 'Introduction',
            url: '/docs/external-adapters/',
          },
          {
            title: 'External Adapters in Solidity',
            url: '/docs/contract-creators/',
          },
          {
            title: 'Building External Adapters',
            url: '/docs/developers/',
          },
          {
            title: 'Bridges: Adding External Adapters to Nodes',
            url: '/docs/node-operators/',
          },
        ],
      },
      {
        section: 'EXTERNAL INITIATORS',
        contents: [
          {
            title: 'Introduction',
            url: '/docs/external-initiators-introduction/',
          },
          {
            title: 'Building External Initiators',
            url: '/docs/building-external-initiators/',
          },
          {
            title: 'Adding External Initiators to Nodes',
            url: '/docs/external-initiators-in-nodes/',
          },
        ],
      },
    ],
    legacy: [
      {
        section: 'VRF v1 [DEPRECATED]',
        contents: [
          {
            title: 'Introduction to Chainlink VRF',
            url: '/docs/vrf/v1/introduction/',
          },
          {
            title: 'Get a Random Number',
            url: '/docs/vrf/v1/get-a-random-number/',
          },
          {
            title: 'Security Considerations',
            url: '/docs/vrf/v1/security/',
          },
          {
            title: 'Best Practices',
            url: '/docs/vrf/v1/best-practices/',
          },
          {
            title: 'Configuration',
            url: '/docs/vrf/v1/configuration/',
          },
          {
            title: 'API Reference',
            url: '/docs/vrf/v1/api-reference/',
          },
        ],
      },
      {
        section: 'v1 JSON JOBS [REMOVED]',
        contents: [
          {
            title: 'Job Specifications',
            url: '/docs/job-specifications/',
          },
          {
            title: 'Core Adapters',
            url: '/docs/core-adapters/',
          },
          {
            title: 'Initiators',
            url: '/docs/initiators/',
          },
        ],
      },
    ],
  },
};
