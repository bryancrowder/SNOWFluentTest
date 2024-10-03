import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '05a210312b054ae9addb6d202044b730'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '33c6d4deebe043c19959fe3281458a84'
                    }
                }
            }
        }
    }
}
