// 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// ⚠️ THIS FILE IS AUTO-GENERATED WHEN packages/dapplib/interactions CHANGES
// DO **** NOT **** MODIFY CODE HERE AS IT WILL BE OVER-WRITTEN
// 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

const fcl = require("@onflow/fcl");

module.exports = class DappScripts {

	static flowtoken_get_balance() {
		return fcl.script`
				import FungibleToken from 0xee82856bf20e2aa6
				import FlowToken from 0x0ae53cb6e3f42a79
				
				pub fun main(account: Address): UFix64 {
				
				    let vaultRef = getAccount(account)
				        .getCapability(/public/flowTokenBalance)
				        .borrow<&FlowToken.Vault{FungibleToken.Balance}>()
				        ?? panic("Could not borrow Balance reference to the Vault")
				
				    return vaultRef.balance
				}  
		`;
	}

	static project_get_username() {
		return fcl.script`
				import RegistrySampleContract from 0x01cf0e2f2f715450
				import ComposedContract from 0x01cf0e2f2f715450
				
				pub fun main(account: Address): String {
				
				    let tenant = getAccount(account).getCapability(RegistrySampleContract.TenantPublicPath).borrow<&RegistrySampleContract.Tenant{RegistrySampleContract.ITenantPublic}>()
				                        ?? panic("Could not borrow the Tenant")
				
				    return ComposedContract.getUserName(tenant: tenant)
				}  
				
				
		`;
	}

	static project_get_welcome() {
		return fcl.script`
				import RegistrySampleContract from 0x01cf0e2f2f715450
				import ComposedContract from 0x01cf0e2f2f715450
				
				pub fun main(account: Address): String {
				
				    let tenant = getAccount(account).getCapability(RegistrySampleContract.TenantPublicPath).borrow<&RegistrySampleContract.Tenant{RegistrySampleContract.ITenantPublic}>()
				                        ?? panic("Could not borrow the Tenant")
				
				    return ComposedContract.getWelcome(tenant: tenant)
				}  
				
				
		`;
	}

	static registry_has_auth_nft() {
		return fcl.script`
				import RegistryService from 0x01cf0e2f2f715450
				
				// Checks to see if an account has an AuthNFT
				
				pub fun main(tenant: Address): Bool {
				    let hasAuthNFT = getAccount(tenant).getCapability(RegistryService.AuthPublicPath)
				                        .borrow<&RegistryService.AuthNFT{RegistryService.IAuthNFT}>()
				
				    if hasAuthNFT == nil {
				        return false
				    } else {
				        return true
				    }
				}
		`;
	}

}
