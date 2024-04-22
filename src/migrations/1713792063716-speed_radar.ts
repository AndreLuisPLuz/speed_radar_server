import { MigrationInterface, QueryRunner } from "typeorm";

export class SpeedRadar1713792063716 implements MigrationInterface {
    name = 'SpeedRadar1713792063716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "violation" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_b4f833198cf98062eca084418eb" DEFAULT NEWSEQUENTIALID(), "speedKmH" float NOT NULL, "createdAt" datetime NOT NULL CONSTRAINT "DF_eb1dce8bddd0f35af588a44c711" DEFAULT getdate(), CONSTRAINT "PK_b4f833198cf98062eca084418eb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "violation"`);
    }

}
