#pragma once

#include <string.h>
#include "eth_internals.h"
#include "eth_plugin_interface.h"
#include "debug_write.h"

// Number of selectors defined in this plugin. Should match the enum `selector_t`.
#define NUM_SELECTORS 2

// Name of the plugin.
#define PLUGIN_NAME "wBAN"

#define PARAMETER_LENGTH 32  // 32 bytes

// Plugin uses 0x00000 as a dummy address to reprecent ETH.
extern const uint8_t NULL_ETH_ADDRESS[ADDRESS_LENGTH];

// Enumeration of the different selectors possible.
// Should follow the exact same order as the array declared in main.c
typedef enum {
    WRAP,
    UNWRAP,
} selector_t;

// Enumeration used to parse the smart contract data.
typedef enum {
    AMOUNT,
    BANANO_ADDRESS,
    BANANO_ADDRESS_PART_1,
    BANANO_ADDRESS_PART_2,
    NONE,
} parameter;

extern const uint32_t WBAN_SELECTORS[NUM_SELECTORS];

// Shared global memory with Ethereum app. Must be at most 5 * 32 bytes.
typedef struct context_t {
    uint8_t amount[INT256_LENGTH];

    // For parsing data.
    uint8_t skip;
    uint8_t next_param;  // Set to be the next param we expect to parse.

    // For both parsing and display.
    selector_t selectorIndex;
} context_t;

// Piece of code that will check that the above structure is not bigger than 5 * 32. Do not remove
// this check.
_Static_assert(sizeof(context_t) <= 5 * 32, "Structure of parameters too big.");

void handle_provide_parameter(void *parameters);
void handle_query_contract_ui(void *parameters);
void handle_init_contract(void *parameters);
void handle_finalize(void *parameters);
void handle_provide_token(void *parameters);
void handle_query_contract_id(void *parameters);

static inline void printf_hex_array(const char *title __attribute__((unused)),
                                    size_t len __attribute__((unused)),
                                    const uint8_t *data __attribute__((unused))) {
    PRINTF(title);
    for (size_t i = 0; i < len; ++i) {
        PRINTF("%02x", data[i]);
    };
    PRINTF("\n");
}
