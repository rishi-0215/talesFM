interface FeatureItemProps {
  title: string;
  description?: string;
  isBullet?: boolean;
}

export const FeatureItem = ({ title, description, isBullet = false }: FeatureItemProps) => (
  <div className="group">
    <div className="flex items-start">
      {isBullet && <span className="text-orange-500 mr-3 mt-1.5 text-xl">•</span>}
      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        {description && <p className="text-gray-400 mt-1 leading-relaxed">{description}</p>}
      </div>
    </div>
  </div>
);