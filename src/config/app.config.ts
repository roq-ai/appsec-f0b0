interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Owner'],
  customerRoles: ['Parent'],
  tenantRoles: ['School Owner', 'School Administrator', 'Teacher', 'Student'],
  tenantName: 'School',
  applicationName: 'appsec',
  addOns: ['chat', 'notifications', 'file'],
};
