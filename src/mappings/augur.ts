// Required for dynamic memory allocation in WASM / AssemblyScript
import 'allocator/arena'
export { allocate_memory }

// imports
import {
  handleMarketCreated,
  handleMarketFinalized,
  handleReportingParticpiantDisavowed,
  handleMarketMigrated,
  handleMarketMailboxTransferred,
  handleMarketParticipantsDisavowed,
  handleMarketTransferred,
  handleCompleteSetPurchased,
  handleCompleteSetSold,
  handleTradingProceedsClaimed
} from "./market";

import {
  handleInitialReportSubmitted,
  handleInitialReporterRedeemed,
  handleInitialReporterTransferred
} from "./initialReport";

import {
  handleDisputeCrowdsourcerCompleted,
  handleDisputeCrowdsourcerContribution,
  handleDisputeCrowdsourcerCreated,
  handleDisputeCrowdsourcerRedeemed
} from "./disputeCrowdsourcer";

import {
  handleUniverseCreated,
  handleUniverseForked
} from "./universe";

import {
  handleOrderCanceled,
  handleOrderCreated,
  handleOrderFilled
} from "./order";


// exports
export {
  handleMarketCreated,
  handleMarketFinalized,
  handleReportingParticpiantDisavowed,
  handleMarketMigrated,
  handleMarketMailboxTransferred,
  handleMarketParticipantsDisavowed,
  handleMarketTransferred,
  handleCompleteSetPurchased,
  handleCompleteSetSold,
  handleTradingProceedsClaimed,
  handleInitialReportSubmitted,
  handleInitialReporterRedeemed,
  handleInitialReporterTransferred,
  handleDisputeCrowdsourcerCompleted,
  handleDisputeCrowdsourcerContribution,
  handleDisputeCrowdsourcerCreated,
  handleDisputeCrowdsourcerRedeemed,
  handleUniverseCreated,
  handleUniverseForked,
  handleOrderCanceled,
  handleOrderCreated,
  handleOrderFilled
}
