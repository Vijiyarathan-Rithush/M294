/**
 * Eigenschaften für das Modal
 */
export type ModalProperties =
{
    /** Die Kinder-Komponente, bekommt setOpen zum Schließen */
    children: ({ setOpen }: { setOpen: (open: boolean) => void }) => React.ReactNode;
}