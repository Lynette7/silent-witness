use debug::PrintTrait;

#[derive(Copy, Drop)]
struct Crime<T> {
    name: T,
    description: T,
    evidence: T,
}

trait CrimeTrait<T> {
    fn display_crime(ref self: Crime<T>);
}

impl CrimeImpl<T, impl TCopy: Copy<T>, impl TDrop: Drop<T>, impl TPrint: PrintTrait<T>> of CrimeTrait<T> {
    fn display_crime(ref self: Crime<T>) {
        self.name.print();
        self.description.print();
        self.evidence.print();
    }
}

fn main() {
    let mut crime = Crime {
        name: 'felony',
        description: 'very bad crime',
        evidence: 'DNA',
    };
    crime.display_crime();
}