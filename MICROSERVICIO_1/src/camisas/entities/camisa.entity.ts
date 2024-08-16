import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Camisa {

    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    idCliente: number;

    @Column()
    color: string;

    @Column()
    talla: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column()
    ImagenEstampado: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
