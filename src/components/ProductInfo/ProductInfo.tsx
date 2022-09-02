
import { Card, Typography, Divider, Tag } from 'antd';
import { useAppSelector } from '../../store';
import { productInfo } from '../../store/slices/appSlice';
import { infoClassName, productImgClassName, tagClassName } from './styles';

export const ProductInfo = () => {
	const data = useAppSelector(productInfo);
	if (!data) {
		return null;
	}
	const { title, subtitle, image, tags } = data;

	return (<div className={infoClassName}>
		<Card>
			<img className={productImgClassName} src={image} alt={title} />
			<Typography.Title level={4}>{title}</Typography.Title>
			<Typography.Paragraph type="secondary">{subtitle}</Typography.Paragraph>
			<Divider />
			{
				tags.map(tag => <Tag key={tag} className={tagClassName}>{tag}</Tag>)
			}
			<Divider />
		</Card>
	</div>)
}