

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-10 md:w-4/12">
            <p  className="text-cyan-400 mb-2">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-4 uppercase">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;