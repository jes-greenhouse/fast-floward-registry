import RegistrySampleContract from Project.RegistrySampleContract

// This is a blank ComposedContract template. It imports
// the blank RegistrySampleContract template because you will
// use that in here.

pub contract ComposedContract {

    pub fun getUserName(tenant: &RegistrySampleContract.Tenant{RegistrySampleContract.ITenantPublic}): String {
        return tenant.userName
    }

    pub fun getWelcome(tenant: &RegistrySampleContract.Tenant{RegistrySampleContract.ITenantPublic}): String {
        return "Welcome ".concat(tenant.userName).concat("!")
    }

    init() {

    }
}