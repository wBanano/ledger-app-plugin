#include "wban_plugin.h"

// Set UI for amount
static void set_amount_ui(char *token, ethQueryContractUI_t *msg, const context_t *context) {
    strlcpy(msg->title, "Amount", msg->titleLength);
    amountToString(context->amount, INT256_LENGTH, 18, token, msg->msg, msg->msgLength);
}

void handle_query_contract_ui(void *parameters) {
    ethQueryContractUI_t *msg = (ethQueryContractUI_t *) parameters;
    context_t *context = (context_t *) msg->pluginContext;

    // Clean the display fields.
    memset(msg->title, 0, msg->titleLength);
    memset(msg->msg, 0, msg->msgLength);
    msg->result = ETH_PLUGIN_RESULT_OK;

    PRINTF("Switching to selector: %d and screen: %d\n", context->selectorIndex, msg->screenIndex);

    switch (context->selectorIndex) {
        case WRAP:
            switch (msg->screenIndex) {
                case 0:
                    set_amount_ui("BAN ", msg, context);
                    return;
            }
        case UNWRAP:
            switch (msg->screenIndex) {
                case 0:
                    set_amount_ui("wBAN ", msg, context);
                    return;
            }
    }

    PRINTF("Received an invalid selectorIndex + screenIndex tuple\n");
    msg->result = ETH_PLUGIN_RESULT_ERROR;
    return;
}
