/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'w791kvydu49q.eu-central-1.psdb.cloud',
      port: 3306,
      username: 'gxwlldo1z9s0',
      password: 'pscale_pw_gUVb4i5CLlLvOt48vWitpmjSxdZJcU11Vkn5srlj7VQ',
      database: 'mysqlcloud',
      autoLoadEntities: true,
      ssl: true,
    }),
    PersonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
