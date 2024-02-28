export class Environment {
  public static readonly ROOT_URL: string = 'DOCKER:PROTOCOL://DOCKER:MACHINE_DOMAIN';
  public static readonly FACTS_DASHBOARD_SERVER: string = 'DOCKER:FACTS_DASHBOARD_URL';
  public static readonly USER_MANAGER_SERVER: string = 'DOCKER:USER_MANAGER_URL';
  public static readonly CADT_SERVER: string = 'DOCKER:CADT_URL';
  public static readonly APPOINTMENT_CENTER_SERVER: string = 'DOCKER:APPOINTMENT_CENTER_URL';
  public static readonly XFORMS_SERVER: string = 'DOCKER:XFORMS_URL';
  public static readonly SURVEYS_CREDIBILITY_SERVER: string = 'DOCKER:SURVEYS_CREDIBILITY_URL';
  public static readonly SURVEYS_NCA_SERVER: string = 'DOCKER:SURVEYS_NCA_URL';
}
