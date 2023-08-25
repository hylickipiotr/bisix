import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import packageJson from '../../package.json';

@JsonController('/system')
@Service()
export default class SystemController {
  @Get('/health')
  health() {
    return { status: 'ok' };
  }

  @Get('/version')
  version() {
    return { version: packageJson.version };
  }

  @Get('/time')
  time() {
    return {
      time: new Date().toISOString(),
      timestamp: Date.now(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }
}
