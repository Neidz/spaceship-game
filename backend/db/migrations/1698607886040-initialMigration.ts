import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1698607886040 implements MigrationInterface {
    name = 'InitialMigration1698607886040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "spaceship" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "crewSize" integer NOT NULL, "maxSpeed" integer NOT NULL, "range" integer NOT NULL, "cargoCapacity" integer NOT NULL, "cost" integer NOT NULL, "weight" integer NOT NULL, "batteryCapacity" integer NOT NULL, CONSTRAINT "PK_94ee6cf32be536f1af15ed80716" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "spaceship"`);
    }

}
