import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1724210353808 implements MigrationInterface {
  name = 'InitialMigration1724210353808';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "coupon" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "discountType" character varying NOT NULL, "discountValue" numeric NOT NULL, "expirationDate" TIMESTAMP, "eventId" integer, CONSTRAINT "PK_fcbe9d72b60eed35f46dc35a682" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "uf" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "date" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "imageUrl" character varying, "eventUrl" character varying, "addressId" integer, CONSTRAINT "REL_84f0d238c7276f4776446b1d82" UNIQUE ("addressId"), CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "coupon" ADD CONSTRAINT "FK_7b644f55be88b4471ceeb0e82fc" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_84f0d238c7276f4776446b1d82b" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "event" DROP CONSTRAINT "FK_84f0d238c7276f4776446b1d82b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "coupon" DROP CONSTRAINT "FK_7b644f55be88b4471ceeb0e82fc"`,
    );
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "coupon"`);
  }
}
