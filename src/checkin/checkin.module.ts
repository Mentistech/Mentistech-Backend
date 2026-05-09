import { Module } from '@nestjs/common';
import { AnthropicService } from './anthropic.service';
import { CheckinController } from './checkin.controller';
import { CheckinService } from './checkin.service';

@Module({
  controllers: [CheckinController],
  providers: [CheckinService, AnthropicService],
})
export class CheckinModule {}
