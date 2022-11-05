#include "wban_plugin.h"

static void handle_wrap_or_unwrap(ethPluginProvideParameter_t *msg, context_t *context) {
    PRINTF("[handle_wrap] next_param=%d\n", context->next_param);

    switch (context->next_param) {
        case AMOUNT:
            copy_parameter(context->amount, msg->parameter, INT256_LENGTH);
            context->next_param = NONE;
            break;
        case NONE:
            break;
        // Keep this
        default:
            PRINTF("Param not supported: %d\n", context->next_param);
            msg->result = ETH_PLUGIN_RESULT_ERROR;
            break;
    }
}

void handle_provide_parameter(void *parameters) {
    ethPluginProvideParameter_t *msg = (ethPluginProvideParameter_t *) parameters;
    context_t *context = (context_t *) msg->pluginContext;
    // We use `%.*H`: it's a utility function to print bytes. You first give
    // the number of bytes you wish to print (in this case, `PARAMETER_LENGTH`) and then
    // the address (here `msg->parameter`).
    PRINTF("plugin provide parameter: offset %d\nBytes: %.*H\n",
           msg->parameterOffset,
           PARAMETER_LENGTH,
           msg->parameter);

    msg->result = ETH_PLUGIN_RESULT_OK;

    if (context->skip) {
        // Skip this step, and don't forget to decrease skipping counter.
        context->skip--;
    } else {
        PRINTF("Dealing with selector %d\n", context->selectorIndex);

        switch (context->selectorIndex) {
            case WRAP:
                handle_wrap_or_unwrap(msg, context);
                break;
            case UNWRAP:
                handle_wrap_or_unwrap(msg, context);
                break;
            default:
                PRINTF("Selector Index not supported: %d\n", context->selectorIndex);
                msg->result = ETH_PLUGIN_RESULT_ERROR;
                break;
        }
    }
}