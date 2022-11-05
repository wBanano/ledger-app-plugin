#include "wban_plugin.h"

void handle_finalize(void *parameters) {
    ethPluginFinalize_t *msg = (ethPluginFinalize_t *) parameters;
    context_t *context = (context_t *) msg->pluginContext;

    switch (context->selectorIndex) {
        case WRAP:
            msg->numScreens = 1;  // amount
            break;
        case UNWRAP:
            msg->numScreens = 1;  // amount
            break;
    }

    msg->uiType = ETH_UI_TYPE_GENERIC;
    msg->result = ETH_PLUGIN_RESULT_OK;
}
