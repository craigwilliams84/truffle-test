# truffle-test
Test migrations bug [886](https://github.com/trufflesuite/truffle/issues/886) reproduction.

## Steps
- `truffle migrate`
- `truffle migrate -f 3`

The expected behaviour would be that the `3_deployContractB.js` migrations script will run, but instead the output is `Network up to date`.

Also,

- `rm -rf build`
- `truffle migrate -f 1`

The expected behaviour would be that only `1_initial_migrations.js` will run, however, all migrations scripts are run.

## Note
This issue occurs in v4.1.5 and v4.1.4, but works in v4.1.3.

