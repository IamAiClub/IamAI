#!/usr/bin/env bash

dfx deploy --ic iamai_ledger_indexer --argument '(
  opt variant {
    Init = record {
      ledger_id = principal "kqigp-jiaaa-aaaan-qzqsq-cai";
      retrieve_blocks_from_ledger_interval_seconds = null;
    }
  },
)'
